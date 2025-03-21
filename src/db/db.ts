import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "../db/schema.ts";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";

const sqlite = new Database(
  // @ts-ignore
  import.meta.env.PROD ? "/data/db.sqlite3" : "./db.sqlite3",
);

export const db = drizzle(sqlite, { schema });

migrate(db, { migrationsFolder: "./drizzle" });
