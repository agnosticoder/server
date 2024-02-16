import {text, sqliteTable, integer} from 'drizzle-orm/sqlite-core';

export const comment = sqliteTable('comment', {
    id: integer('id').primaryKey(),
    auther: text('auther').notNull(),
    content: text('content').notNull()
})