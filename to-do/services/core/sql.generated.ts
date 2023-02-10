import { ColumnType } from 'kysely';

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export interface Todo {
  comments: string | null;
  completed: number;
  id: Generated<number>;
  item: string;
}

export interface Database {
  todo: Todo;
}
