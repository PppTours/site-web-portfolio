import { Module } from '@nestjs/common';
import { StudyLevelService } from './services/study-level.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyLevelEntity } from './entities/study-level.entity';
import { StudyLevelMapperService } from './services/study-level-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudyLevelEntity])],
  providers: [StudyLevelService, StudyLevelMapperService],
  exports: [StudyLevelService, StudyLevelMapperService],
})
export class StudyLevelModule {}
