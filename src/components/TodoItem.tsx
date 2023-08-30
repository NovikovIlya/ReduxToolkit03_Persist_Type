import { useDispatch } from 'react-redux';
import {toggleComplete, removeTodo} from '../store/todoSlice';
import React from 'react';
import { useAppDispatch } from '../hook';

interface TodoItemProps{
  id:string;
  text:string;
  completed:boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  );
};

export default TodoItem;