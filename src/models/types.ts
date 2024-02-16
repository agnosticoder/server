import type { InferSelectModel } from 'drizzle-orm';
import { comment } from './schema';

export type Comment = InferSelectModel<typeof comment>;
