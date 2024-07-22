import { Module } from '@nestjs/common';
import { StudySpecialtyService } from './study-specialty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySpecialtyEntity } from './study-specialty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudySpecialtyEntity])],
  providers: [StudySpecialtyService],
  exports: [StudySpecialtyService],
})
export class StudySpecialtyModule {}
