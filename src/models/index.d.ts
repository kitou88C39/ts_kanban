import {
  ModelInit,
  MutableModel,
  __modelMeta__,
  ManagedIdentifier,
} from '@aws-amplify/datastore';
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from '@aws-amplify/datastore';

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type ReadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isDone: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isDone: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Todo = LazyLoading extends LazyLoadingDisabled
  ? EagerTodo
  : LazyTodo;

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(
    source: Todo,
    mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void
  ): Todo;
};

type EagerRead = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Read, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly todoId: string;
  readonly readerId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyRead = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Read, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly todoId: string;
  readonly readerId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Read = LazyLoading extends LazyLoadingDisabled
  ? EagerRead
  : LazyRead;

export declare const Read: (new (init: ModelInit<Read>) => Read) & {
  copyOf(
    source: Read,
    mutator: (draft: MutableModel<Read>) => MutableModel<Read> | void
  ): Read;
};
