import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameSpecialtyToSector1722121965402
  implements MigrationInterface
{
  name = 'RenameSpecialtyToSector1722121965402';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "study_specialty" RENAME TO "study_sector"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" RENAME COLUMN "specialty_id" TO "sector_id"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "study_sector" RENAME TO "study_specialty"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" RENAME COLUMN "sector_id" TO "specialty_id"`,
    );
  }
}
