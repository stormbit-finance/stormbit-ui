import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ScoreModule } from '../src/modules/score/score.module';
import { DatabaseModule } from '../src/database/database.module';
import { LoanEntity } from '../src/modules/loan/loan.entity';
import { CreateLoanDto } from '../src/modules/loan/dto/createloan.dto';
import { LoanModule } from '../src/modules/loan/loan.module';
import { updatedLoanDto } from 'src/modules/loan/dto/updateloan.dto';
describe('ScoreController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ScoreModule,DatabaseModule,LoanModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });



  it('GET /score/score', () => {
    const token = '122009c65654ece48921033926486128aa053d44';
    const address = '0x4bdB8234AD81F26985d257F36a2d2d8c30365546';
  
    return request(app.getHttpServer())
      .get('/score/score')
      .query({ address })
      .set('Authorization', `Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /json/)
      .expect((res) => {
        expect(res.body).toEqual(expect.any(Object));
      }).timeout(10000)
  });

  
  it('POST /loan', async () => {
    const loan: CreateLoanDto = {
        
      debt_total: 10002,
      lender: 1232,
      deposit_total: 2002,
      repaid_total: 5002,
      loans_request_rejected: 22,
      loans_expired: 12,
    
    };

    const response = await request(app.getHttpServer())
      .post('/loan')
      .send(loan)
      .expect(201);

    expect(response.body).toEqual(expect.objectContaining(loan));
  });
  it('GET /loan', async () => {
    const response = await request(app.getHttpServer())
      .get('/loan')
      .expect(200);

    expect(response.body).toEqual(expect.any(Array));
  });

  it('GET /loan/:id', async () => {
    const loan: CreateLoanDto = {
        
      debt_total: 10002,
      lender: 1232,
      deposit_total: 2002,
      repaid_total: 5002,
      loans_request_rejected: 22,
      loans_expired: 12,
    
    };

    const createdLoan = await request(app.getHttpServer())
      .post('/loan')
      .send(loan)
      .expect(201);

    const response = await request(app.getHttpServer())
      .get(`/loan/${createdLoan.body.id}`)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining(loan));
  });

  it('PATCH /loan/:id', async () => {
    const loan: CreateLoanDto = {
        
      debt_total: 10002,
      lender: 1232,
      deposit_total: 2002,
      repaid_total: 5002,
      loans_request_rejected: 22,
      loans_expired: 12,
    
    };

    const createdLoan = await request(app.getHttpServer())
      .post('/loan')
      .send(loan)
      .expect(201);

    const updatedLoan: updatedLoanDto = {
      debt_total: 20,
      lender: 20,
      deposit_total: 20,
      repaid_total: 20,
      loans_request_rejected: 20,
      loans_expired: 20
    };

    const response = await request(app.getHttpServer())
      .patch(`/loan/${createdLoan.body.id}`)
      .send(updatedLoan)
      .expect(200);

    expect(response.body).toEqual(expect.objectContaining(updatedLoan));
  });

  it('DELETE /loan/:id', async () => {
    const loan: CreateLoanDto = {
        
      debt_total: 10002,
      lender: 1232,
      deposit_total: 2002,
      repaid_total: 5002,
      loans_request_rejected: 22,
      loans_expired: 12,
    
    };

    const createdLoan = await request(app.getHttpServer())
      .post('/loan')
      .send(loan)
      .expect(201);

    await request(app.getHttpServer())
      .delete(`/loan/${createdLoan.body.id}`)
      .expect(200);

    const response = await request(app.getHttpServer())
      .get(`/loan/${createdLoan.body.id}`)
      .expect(200);
  });
 

  afterAll(async () => {
    await app.close();
  });
});