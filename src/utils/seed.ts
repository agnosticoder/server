import { db } from './db';
import * as schema from '../models/schema.ts';

await db.insert(schema.note).values({
    title: 'First Note',
    content: 'This is the first note',
});
