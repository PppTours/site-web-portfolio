import { Module } from '@nestjs/common';
import { StudyLevelService } from './study-level.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyLevelEntity } from './study-level.entity';
import { StudyLevelDtoService } from './dtos/study-level.dto.service';
import { StudyLevelRepository } from './study-level.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudyLevelEntity])],
  providers: [StudyLevelService, StudyLevelDtoService, StudyLevelRepository],
  exports: [StudyLevelService, StudyLevelDtoService],
})
export class StudyLevelModule {}
