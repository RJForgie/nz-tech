import { text, sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const comments = sqliteTable("comments", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  author: text("author").notNull(),
  content: text("content").notNull(),
});
