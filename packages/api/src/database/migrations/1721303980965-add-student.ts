import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddStudent1721303980965 implements MigrationInterface {
  name = 'AddStudent1721303980965';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "study_level" (
        "id" SERIAL NOT NULL, 
        "name" VARCHAR NOT NULL, 
        CONSTRAINT "PK_3782bca0800b6d4c75f9019eb68" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "study_specialty" (
        "id" SERIAL NOT NULL, 
        "initialism" VARCHAR NOT NULL, 
        "title" VARCHAR NOT NULL, 
        CONSTRAINT "PK_3f04dc5a5e8a24b67e0bbc0de90" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `CREATE TABLE "student" (
        "id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
        "first_name" VARCHAR NOT NULL, 
        "last_name" VARCHAR NOT NULL, 
        "profile_picture_url" VARCHAR, 
        "level_id" INTEGER NOT NULL, 
        "specialty_id" INTEGER, 
        CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "FK_7bad0eccb24746edb72da1e7d69" 
      FOREIGN KEY ("level_id") REFERENCES "study_level"("id") 
      ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" ADD CONSTRAINT "FK_76b0972b066c01f496c665cfaac" 
      FOREIGN KEY ("specialty_id") REFERENCES "study_specialty"("id") 
      ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_76b0972b066c01f496c665cfaac"`,
    );
    await queryRunner.query(
      `ALTER TABLE "student" DROP CONSTRAINT "FK_7bad0eccb24746edb72da1e7d69"`,
    );
    await queryRunner.query(`DROP TABLE "study_specialty"`);
    await queryRunner.query(`DROP TABLE "student"`);
    await queryRunner.query(`DROP TABLE "study_level"`);
  }
}
