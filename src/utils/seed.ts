import { db } from './db';
import * as schema from '../models/schema.ts';

await db.insert(schema.comment).values({
    auther: 'John Doe',
    content: 'Hello World!',
});
