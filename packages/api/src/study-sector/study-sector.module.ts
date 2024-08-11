import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StudySectorEntity } from './entities/study-sector.entity';
import { StudySectorService } from './services/study-sector.service';
import { StudySectorMapperService } from './services/study-sector-mapper.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudySectorEntity])],
  providers: [StudySectorService, StudySectorMapperService],
  exports: [StudySectorService, StudySectorMapperService],
})
export class StudySectorModule {}
