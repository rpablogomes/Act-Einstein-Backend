import { Test, TestingModule } from '@nestjs/testing';
import { InterviewedService } from './interviewed.service';

describe('InterviewedService', () => {
  let service: InterviewedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterviewedService],
    }).compile();

    service = module.get<InterviewedService>(InterviewedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
