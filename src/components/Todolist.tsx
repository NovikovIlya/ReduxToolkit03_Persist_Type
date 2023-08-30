import React from 'react';
import TodoItem from './TodoItem';
import { useAppSelector } from '../hook';

const Todolist = () => {
  const todos = useAppSelector((state)=>state.todos.todos)
  console.log(todos)
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
        
        />
      ))}
    </ul>
  );
};

export default Todolist;
