import { Test, TestingModule } from '@nestjs/testing';
import { StudyLevelService } from './study-level.service';

describe('StudyLevelService', () => {
  let service: StudyLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudyLevelService],
    }).compile();

    service = module.get<StudyLevelService>(StudyLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
