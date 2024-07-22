import { Test, TestingModule } from '@nestjs/testing';
import { StudySpecialtyService } from './study-specialty.service';

describe('StudySpecialtyService', () => {
  let service: StudySpecialtyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudySpecialtyService],
    }).compile();

    service = module.get<StudySpecialtyService>(StudySpecialtyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
