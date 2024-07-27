import { Module } from '@nestjs/common';
import { StudySectorService } from './study-sector.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudySectorEntity } from './study-sector.entity';
import { StudySectorDtoService } from './dto/study-sector.dto.service';
import { StudySectorRepository } from './study-sector.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudySectorEntity])],
  providers: [StudySectorService, StudySectorDtoService, StudySectorRepository],
  exports: [StudySectorService, StudySectorDtoService],
})
export class StudySectorModule {}
