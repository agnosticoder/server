import { text, sqliteTable, integer } from 'drizzle-orm/sqlite-core';

export const note = sqliteTable('note', {
    id: text('id')
        .primaryKey()
        .$defaultFn(() => crypto.randomUUID()),
    title: text('title').notNull(),
    content: text('content').notNull(),
    isDone: integer('isDone', { mode: 'boolean' }).notNull().default(false),
    createdAt: integer('createdAt', { mode: 'timestamp' }).$defaultFn(
        () => new Date()
    ),
    updatedAt: integer('createdAt', { mode: 'timestamp' }).$defaultFn(
        () => new Date()
    ),
});
