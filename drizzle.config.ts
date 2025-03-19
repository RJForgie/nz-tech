import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './src/db/schema.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url:
            process.env.NODE_ENV === 'production'
                ? '/data/db.sqlite3'
                : './db.sqlite3'
    }
});
