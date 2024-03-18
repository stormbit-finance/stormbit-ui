import { Test, TestingModule } from '@nestjs/testing';
import { JwtauthController } from './jwtauth.controller';

describe('JwtauthController', () => {
  let controller: JwtauthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JwtauthController],
    }).compile();

    controller = module.get<JwtauthController>(JwtauthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
