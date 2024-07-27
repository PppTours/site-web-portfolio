import { MigrationInterface, QueryRunner } from 'typeorm';

export class SpecifyUniqueColumns1721937796731 implements MigrationInterface {
  name = 'SpecifyUniqueColumns1721937796731';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "study_level" 
      ADD CONSTRAINT "UQ_3a2f8138650bf64db5d242b5f55" UNIQUE ("name")`,
    );
    await queryRunner.query(
      `ALTER TABLE "study_specialty" 
      ADD CONSTRAINT "UQ_5e16da2d8489bec6d6336a8e97c" UNIQUE ("initialism")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "study_specialty" DROP CONSTRAINT "UQ_5e16da2d8489bec6d6336a8e97c"`,
    );
    await queryRunner.query(
      `ALTER TABLE "study_level" DROP CONSTRAINT "UQ_3a2f8138650bf64db5d242b5f55"`,
    );
  }
}
