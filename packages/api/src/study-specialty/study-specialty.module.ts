import { Module } from '@nestjs/common';
import { StudySpecialtyService } from './study-specialty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySpecialtyEntity } from './study-specialty.entity';
import { StudySpecialtyDtoService } from './dto/study-specialty.dto.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudySpecialtyEntity])],
  providers: [StudySpecialtyService, StudySpecialtyDtoService],
  exports: [StudySpecialtyService, StudySpecialtyDtoService],
})
export class StudySpecialtyModule {}
