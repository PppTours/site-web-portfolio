import { Module } from '@nestjs/common';
import { StudyLevelService } from './study-level.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyLevelEntity } from './study-level.entity';
import { StudyLevelDtoService } from './dto/study-level.dto.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudyLevelEntity])],
  providers: [StudyLevelService, StudyLevelDtoService],
  exports: [StudyLevelService, StudyLevelDtoService],
})
export class StudyLevelModule {}
