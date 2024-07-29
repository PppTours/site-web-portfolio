import { ValidateNested } from 'class-validator';
import { StudyLevelEntity } from 'src/study-level/study-level.entity';
import { StudySectorEntity } from 'src/study-sector/study-sector.entity';

export class StudentRelations {
  @ValidateNested()
  studyLevel: StudyLevelEntity;

  @ValidateNested()
  studySector: StudySectorEntity;
}
