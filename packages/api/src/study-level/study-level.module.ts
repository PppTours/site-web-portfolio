import { Module } from '@nestjs/common';
import { StudyLevelService } from './study-level.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudyLevelEntity } from './study-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudyLevelEntity])],
  providers: [StudyLevelService],
  exports: [StudyLevelService],
})
export class StudyLevelModule {}
