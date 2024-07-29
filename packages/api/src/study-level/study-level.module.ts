import { Module } from '@nestjs/common';
import { StudyLevelService } from './study-level.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyLevelEntity } from './study-level.entity';
import { StudyLevelMapperService } from './services/study-level-mapper.service';
import { StudyLevelRepository } from './study-level.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudyLevelEntity])],
  providers: [StudyLevelService, StudyLevelMapperService, StudyLevelRepository],
  exports: [StudyLevelService, StudyLevelMapperService],
})
export class StudyLevelModule {}
