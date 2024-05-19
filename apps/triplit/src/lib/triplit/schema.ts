import { Schema as S, type ClientSchema, type Entity } from '@triplit/client';

/**
 * Define your schema here.
 * For more information on schemas, see the docs: https://www.triplit.dev/docs/schemas
 */
export const schema = {
  todos: {
    schema: S.Schema({
      id: S.Id(),
      text: S.String(),
      completed: S.Boolean({ default: false }),
      created_at: S.Date({ default: S.Default.now() }),
    }),
  },
} satisfies ClientSchema;

export type Todo = Entity<typeof schema, 'todos'>;
