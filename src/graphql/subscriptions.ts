/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      title
      content
      isDone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      title
      content
      isDone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      title
      content
      isDone
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRead = /* GraphQL */ `
  subscription OnCreateRead($filter: ModelSubscriptionReadFilterInput) {
    onCreateRead(filter: $filter) {
      id
      todoId
      readerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateRead = /* GraphQL */ `
  subscription OnUpdateRead($filter: ModelSubscriptionReadFilterInput) {
    onUpdateRead(filter: $filter) {
      id
      todoId
      readerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteRead = /* GraphQL */ `
  subscription OnDeleteRead($filter: ModelSubscriptionReadFilterInput) {
    onDeleteRead(filter: $filter) {
      id
      todoId
      readerId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
