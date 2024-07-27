import { Test, TestingModule } from '@nestjs/testing';
import { StudySectorService } from './study-sector.service';

describe('StudySectorService', () => {
  let service: StudySectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudySectorService],
    }).compile();

    service = module.get<StudySectorService>(StudySectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
