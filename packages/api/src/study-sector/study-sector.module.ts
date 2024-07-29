import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySectorEntity } from './study-sector.entity';
import { StudySectorRepository } from './study-sector.repository';
import { StudySectorService } from './study-sector.service';
import { StudySectorMapperService } from './services/study-sector-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudySectorEntity])],
  providers: [
    StudySectorService,
    StudySectorMapperService,
    StudySectorRepository,
  ],
  exports: [StudySectorService, StudySectorMapperService],
})
export class StudySectorModule {}
