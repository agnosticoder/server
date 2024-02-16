import { drizzle } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import * as schema from '../models/schema.ts';
import { migrate } from 'drizzle-orm/bun-sqlite/migrator';

const sqlite = new Database(
    import.meta.env.PROD ? '/data/sqlite.db' : './sqlite.db'
);

export const db = drizzle(sqlite, { schema });

migrate(db, {migrationsFolder: './drizzle'});



