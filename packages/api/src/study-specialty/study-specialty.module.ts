import { Module } from '@nestjs/common';
import { StudySpecialtyService } from './study-specialty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySpecialtyEntity } from './study-specialty.entity';
import { StudySpecialtyDtoService } from './dto/study-specialty.dto.service';
import { StudySpecialtyRepository } from './study-specialty.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudySpecialtyEntity])],
  providers: [
    StudySpecialtyService,
    StudySpecialtyDtoService,
    StudySpecialtyRepository,
  ],
  exports: [StudySpecialtyService, StudySpecialtyDtoService],
})
export class StudySpecialtyModule {}
