import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1677489926382 implements MigrationInterface {
  name = 'init1677489926382';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "my_notes"."note" ("createdDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" json, "lastChangedDateTime" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "lastChangedBy" json, "note_id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "detail" character varying NOT NULL, CONSTRAINT "PK_bf848d92c68dc271fef5993dba9" PRIMARY KEY ("note_id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "my_notes"."note"`);
  }
}
