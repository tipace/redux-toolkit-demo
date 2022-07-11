import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'antd';
import { todoActions } from './todoSlice';

export default function TodoItem({ text, completed, todoId: id }: any) {
  const dispatch = useDispatch();

  const deleteIt = () => {
    dispatch(todoActions.removeTodo(id));
  };

  const toggleTodo = () => {
    dispatch(todoActions.toggleTodo(id));
  };

  return (
    <div className="mt-4">
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
        onClick={toggleTodo}
      >
        {text}
      </span>
      &nbsp;&nbsp;
      <Button size="small" type="link" onClick={deleteIt}>
        删除
      </Button>
    </div>
  );
}
