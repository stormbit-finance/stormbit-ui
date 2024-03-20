import { Test, TestingModule } from '@nestjs/testing';
import { OutputsController } from './outputs.controller';

describe('OutputsController', () => {
  let controller: OutputsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OutputsController],
    }).compile();

    controller = module.get<OutputsController>(OutputsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
