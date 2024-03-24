import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { RegisterAuthDto } from './../src/modules/jwtauth/dto/register-auth.dto';
import { LoginAuthDto } from './../src/modules/jwtauth/dto/login-auth.dto';
import { updateUserDto } from 'src/modules/user/dto/update-user.dto';

describe('JwtauthController (e2e)', () => {
  let app: INestApplication;
  let token: string;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
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
      .expect(200);

    expect(response.body).toHaveProperty('token');
    expect(response.body.user).toHaveProperty('id');
    expect(response.body.user.email).toBe(loginData.email);
  });

 

  it('should get all users', async () => {
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
      .expect(404);
  });

});