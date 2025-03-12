import { pgTable, serial, timestamp, text } from 'drizzle-orm/pg-core';

export const suggestionTable = pgTable("suggestion", {
  id: serial('id').primaryKey(),
  suggestion: text('suggestion').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})


export type InsertSuggestion = typeof suggestionTable.$inferInsert;
