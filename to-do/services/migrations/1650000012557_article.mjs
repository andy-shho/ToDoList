import { Kysely, sql } from "kysely";

/**
 * @param db {Kysely<any>}
 */
export async function up(db) {
  await db.schema
    .createTable("todo")
    .addColumn("id", "serial", col => col.primaryKey())
    .addColumn("item", "varchar", col => col.notNull())
    .addColumn("completed", "integer", col => col.notNull())
    .addColumn("comments", "varchar")
    .execute();

//   await db.schema
//     .createIndex("idx_article_created")
//     .on("article")
//     .column("created")
//     .execute();
}

/**
 * @param db {Kysely<any>}
 */
export async function down(db) {
  // await db.schema.dropIndex("idx_article_created").execute();
  await db.schema.dropTable("todo").execute();
}
