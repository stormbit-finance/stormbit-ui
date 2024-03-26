import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { RegisterAuthDto } from './../src/modules/jwtauth/dto/register-auth.dto';
import { LoginAuthDto } from './../src/modules/jwtauth/dto/login-auth.dto';
import { updateUserDto } from '../src/modules/user/dto/update-user.dto';

import { LoanEntity } from '../src/modules/loan/loan.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('JwtauthController (e2e)', () => {
  let app: INestApplication;
  let token: string;
 
  let loanRepository: Repository<LoanEntity>;


  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    loanRepository = moduleFixture.get<Repository<LoanEntity>>(
      getRepositoryToken(LoanEntity),
    );
  });

  afterEach(async () => {
    await app.close();
  });

  it('should register a new user', async () => {
    const registerData: RegisterAuthDto = {
      username: 'john_doe',
      email: 'john@example.com',
      password: 'password123',
    };

    const response = await request(app.getHttpServer())
      .post('/jwtauth/register')
      .send(registerData)
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.username).toBe(registerData.username);
    expect(response.body.email).toBe(registerData.email);
  });

  it('should login a user and return a token', async () => {
    const loginData: LoginAuthDto = {
      email: 'john@example.com',
      password: 'password123',
    };

    const response = await request(app.getHttpServer())
      .post('/jwtauth/login')
      .send(loginData)
      .expect(201);

    expect(response.body).toHaveProperty('token');
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user.email).toBe(loginData.email);

    token = response.body.token;
  });

 

  it('should get all users', async () => {
   
    
    console.log(token);
    
    const response = await request(app.getHttpServer())
      .get('/users')
      .set('Authorization', `Bearer ${token}`)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
  });

  it('should get a user by id', async () => {
    const userId = 1;

    const response = await request(app.getHttpServer())
      .get(`/users/${userId}`)
      .expect(200);

    expect(response.body).toHaveProperty('id', userId);
  });

  it('should update a user', async () => {
    const userId = 1;
    const updateUserData: updateUserDto = {
      username: 'updated_username',
    };

    const response = await request(app.getHttpServer())
      .patch(`/users/${userId}`)
      .send(updateUserData)
      .expect(200);

    expect(response.body).toHaveProperty('id', userId);
    expect(response.body.username).toBe(updateUserData.username);
  });

  it('should delete a user', async () => {
    const userId = 1;

    await request(app.getHttpServer())
      .delete(`/users/${userId}`)
      .expect(200);

    const getUserResponse = await request(app.getHttpServer())
      .get(`/users/${userId}`)
      .expect(200);
  });
  describe('/loan/status/approved (GET)', () => {
    it('should return an array of approved loans', async () => {
      const approvedLoans: LoanEntity[] = [
        {
          id: 1,
          approved: true,
          refused: false,
          repaid: {
            repaid: false,
            tranches: [],
            repaymentTime: 0,
          },
        },
        {
          id: 2,
          approved: true,
          refused: false,
          repaid: {
            repaid: true,
            tranches: [
              { amount: 1000, date: new Date('2023-01-01') },
              { amount: 500, date: new Date('2023-02-01') },
            ],
            repaymentTime: 60,
          },
        },
      ];
  
      // Convertir las fechas a cadenas de texto
      const approvedLoansStringDates = approvedLoans.map((loan) => {
        const repaidTranches = loan.repaid.tranches.map((tranche) => ({
          amount: tranche.amount,
          date: tranche.date.toISOString(), // Convertir la fecha a cadena de texto
        }));
  
        return {
          ...loan,
          repaid: {
            ...loan.repaid,
            tranches: repaidTranches,
          },
        };
      });
  
      jest.spyOn(app.get(getRepositoryToken(LoanEntity)), 'find').mockResolvedValue(approvedLoans);
  
      const response = await request(app.getHttpServer())
        .get('/loan/status/approved')
        .expect(200);
  
      expect(response.body).toEqual(approvedLoansStringDates);
    });
  });
  
  describe('/loan/status/refused (GET)', () => {
    it('should return an array of refused loans', async () => {
      const refusedLoans: LoanEntity[] = [
        {
          id: 3,
          approved: false,
          refused: true,
          repaid: {
            repaid: false,
            tranches: [],
            repaymentTime: 0,
          },
        },
        {
          id: 4,
          approved: false,
          refused: true,
          repaid: {
            repaid: false,
            tranches: [],
            repaymentTime: 0,
          },
        },
      ];
      jest.spyOn(app.get(getRepositoryToken(LoanEntity)), 'find').mockResolvedValue(refusedLoans);

      const response = await request(app.getHttpServer())
        .get('/loan/status/refused')
        .expect(200);

      expect(response.body).toEqual(refusedLoans);
    });
  });

  it('/loan/repaymentTime/:id (GET)', async () => {
    const loan = new LoanEntity();
    loan.repaid = { repaid: false, tranches: [], repaymentTime: 30 };
    const createdLoan = await loanRepository.save(loan);

    const response = await request(app.getHttpServer())
      .get(`/loan/repaymentTime/${createdLoan.id}`)
      .expect(200);

    expect(response.body).toStrictEqual({"repaymentTime": 30});
  });

  it('/loan/repaid/:id (GET)', async () => {
    const loan = new LoanEntity();
    loan.repaid = { repaid: true, tranches: [], repaymentTime: 0 };
    const createdLoan = await loanRepository.save(loan);

    const response = await request(app.getHttpServer())
      .get(`/loan/repaid/${createdLoan.id}`)
      .expect(200);

    expect(response.body).toStrictEqual({"repaid": true});
  });

  it('/loan/repaymentDetails/:id (GET)', async () => {
    const loan = new LoanEntity();
    loan.repaid = {
      repaid: false,
      tranches: [
        { amount: 1000, date: new Date('2023-01-01') },
        { amount: 2000, date: new Date('2023-02-01') },
      ],
      repaymentTime: 0,
    };
    const createdLoan = await loanRepository.save(loan);

    const response = await request(app.getHttpServer())
      .get(`/loan/repaymentDetails/${createdLoan.id}`)
      .expect(200);

    expect(response.body).toEqual([
      { amount: 1000, date: '2023-01-01T00:00:00.000Z' },
      { amount: 2000, date: '2023-02-01T00:00:00.000Z' },
    ]);
  });


});

