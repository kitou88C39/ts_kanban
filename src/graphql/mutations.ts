/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
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
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
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
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
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
export const createRead = /* GraphQL */ `
  mutation CreateRead(
    $input: CreateReadInput!
    $condition: ModelReadConditionInput
  ) {
    createRead(input: $input, condition: $condition) {
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
export const updateRead = /* GraphQL */ `
  mutation UpdateRead(
    $input: UpdateReadInput!
    $condition: ModelReadConditionInput
  ) {
    updateRead(input: $input, condition: $condition) {
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
export const deleteRead = /* GraphQL */ `
  mutation DeleteRead(
    $input: DeleteReadInput!
    $condition: ModelReadConditionInput
  ) {
    deleteRead(input: $input, condition: $condition) {
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
