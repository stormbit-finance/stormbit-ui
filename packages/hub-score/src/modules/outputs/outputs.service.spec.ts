import { Test, TestingModule } from '@nestjs/testing';
import { OutputsService } from './outputs.service';

describe('OutputsService', () => {
  let service: OutputsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OutputsService],
    }).compile();

    service = module.get<OutputsService>(OutputsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
