import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';
import { DataSource } from 'typeorm';
import { SeedService } from './seed.service';

async function runSeeder() {
  const app = await NestFactory.create(AppModule);
  const seedService = new SeedService(app.get(DataSource));
  await seedService.seedData();
  await app.close();
}

runSeeder();
