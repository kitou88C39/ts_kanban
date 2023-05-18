/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  title: string,
  content: string,
  isDone: boolean,
  _version?: number | null,
};

export type ModelTodoConditionInput = {
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  title: string,
  content: string,
  isDone: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateTodoInput = {
  id: string,
  title?: string | null,
  content?: string | null,
  isDone?: boolean | null,
  _version?: number | null,
};

export type DeleteTodoInput = {
  id: string,
  _version?: number | null,
};

export type CreateReadInput = {
  id?: string | null,
  todoId: string,
  readerId: string,
  _version?: number | null,
};

export type ModelReadConditionInput = {
  todoId?: ModelStringInput | null,
  readerId?: ModelStringInput | null,
  and?: Array< ModelReadConditionInput | null > | null,
  or?: Array< ModelReadConditionInput | null > | null,
  not?: ModelReadConditionInput | null,
};

export type Read = {
  __typename: "Read",
  id: string,
  todoId: string,
  readerId: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateReadInput = {
  id: string,
  todoId?: string | null,
  readerId?: string | null,
  _version?: number | null,
};

export type DeleteReadInput = {
  id: string,
  _version?: number | null,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  content?: ModelStringInput | null,
  isDone?: ModelBooleanInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelReadFilterInput = {
  id?: ModelIDInput | null,
  todoId?: ModelStringInput | null,
  readerId?: ModelStringInput | null,
  and?: Array< ModelReadFilterInput | null > | null,
  or?: Array< ModelReadFilterInput | null > | null,
  not?: ModelReadFilterInput | null,
};

export type ModelReadConnection = {
  __typename: "ModelReadConnection",
  items:  Array<Read | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  isDone?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionReadFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  todoId?: ModelSubscriptionStringInput | null,
  readerId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionReadFilterInput | null > | null,
  or?: Array< ModelSubscriptionReadFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    content: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    content: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    content: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateReadMutationVariables = {
  input: CreateReadInput,
  condition?: ModelReadConditionInput | null,
};

export type CreateReadMutation = {
  createRead?:  {
    __typename: "Read",
    id: string,
    todoId: string,
    readerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateReadMutationVariables = {
  input: UpdateReadInput,
  condition?: ModelReadConditionInput | null,
};

export type UpdateReadMutation = {
  updateRead?:  {
    __typename: "Read",
    id: string,
    todoId: string,
    readerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteReadMutationVariables = {
  input: DeleteReadInput,
  condition?: ModelReadConditionInput | null,
};

export type DeleteReadMutation = {
  deleteRead?:  {
    __typename: "Read",
    id: string,
    todoId: string,
    readerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    content: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      title: string,
      content: string,
      isDone: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTodosQuery = {
  syncTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      title: string,
      content: string,
      isDone: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetReadQueryVariables = {
  id: string,
};

export type GetReadQuery = {
  getRead?:  {
    __typename: "Read",
    id: string,
    todoId: string,
    readerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListReadsQueryVariables = {
  filter?: ModelReadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReadsQuery = {
  listReads?:  {
    __typename: "ModelReadConnection",
    items:  Array< {
      __typename: "Read",
      id: string,
      todoId: string,
      readerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncReadsQueryVariables = {
  filter?: ModelReadFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReadsQuery = {
  syncReads?:  {
    __typename: "ModelReadConnection",
    items:  Array< {
      __typename: "Read",
      id: string,
      todoId: string,
      readerId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    content: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    content: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    title: string,
    content: string,
    isDone: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateReadSubscriptionVariables = {
  filter?: ModelSubscriptionReadFilterInput | null,
};

export type OnCreateReadSubscription = {
  onCreateRead?:  {
    __typename: "Read",
    id: string,
    todoId: string,
    readerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateReadSubscriptionVariables = {
  filter?: ModelSubscriptionReadFilterInput | null,
};

export type OnUpdateReadSubscription = {
  onUpdateRead?:  {
    __typename: "Read",
    id: string,
    todoId: string,
    readerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteReadSubscriptionVariables = {
  filter?: ModelSubscriptionReadFilterInput | null,
};

export type OnDeleteReadSubscription = {
  onDeleteRead?:  {
    __typename: "Read",
    id: string,
    todoId: string,
    readerId: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
