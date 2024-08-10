import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { StudentService } from 'src/student/services/student.service';
import { SeedService } from './seed.service';
import { StudyLevelService } from 'src/study-level/services/study-level.service';
import { StudySectorService } from 'src/study-sector/services/study-sector.service';

async function runSeeder() {
  const app = await NestFactory.create(AppModule);
  const seedService = new SeedService(
    app.get(StudentService),
    app.get(StudyLevelService),
    app.get(StudySectorService),
  );
  await seedService.seedData();
  await app.close();
}

runSeeder();
