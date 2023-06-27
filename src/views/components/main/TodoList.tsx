import React, { useEffect } from 'react';
import { Flex, StackDivider, Text, VStack } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { useAppDispatch, useAppSelector } from '../../../stores/hooks';

import {
  fetchTodoList,
  fetchTodoRealTime,
  selectTodoList,
  updateTodoRealTime,
  deleteTodoRealTime,
} from '../../../stores/slices/todoSlice';
import { DataStore } from 'aws-amplify';
import { Todo } from '../../../models';

const TodoList: React.FC = () => {
  const TodoList = useAppSelector(selectTodoList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //todo一覧の取得
    const fetchTodoListAsync = async () => {
      const todo = await DataStore.query(Todo);
      console.log(todo);
      const fetchTodo = todo.map((v) => {
        return JSON.parse(JSON.stringify(v));
      });
      dispatch(fetchTodoList(fetchTodo));
    };
    fetchTodoListAsync();
  }, [dispatch]);

  useEffect(() => {
    //todoテーブルの変更をリアルタイムに検知する
    const subscription = DataStore.observe(Todo).subscribe((todo) => {
      const todoModel = JSON.parse(JSON.stringify(todo.element));
      switch (todo.opType) {
        case 'INSERT':
          dispatch(fetchTodoRealTime(todoModel));
          break;
        case 'UPDATE':
          dispatch(updateTodoRealTime(todoModel));
          break;
        case 'DELETE':
          dispatch(deleteTodoRealTime(todoModel));
          break;
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [dispatch]);

  return (
    <Flex flexDir='column' align='center'>
      <VStack
        divider={<StackDivider borderColor='gray.300' />}
        align='stretch'
        w={{ base: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }}
        border='2px'
        borderColor='gray.700'
        borderRadius='sm'
        p={3}
        maxH='65vh'
        overflow='scroll'
      >
        {TodoList.length === 0 ? (
          <Text align='center' fontWeight='bold' fontSize='lg'>
            No Todo
          </Text>
        ) : (
          TodoList.map((item: any) => {
            return (
              <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                isDone={item.isDone}
              />
            );
          })
        )}
      </VStack>
    </Flex>
  );
};

export default TodoList;
