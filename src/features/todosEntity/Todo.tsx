import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'antd';
import { selectAllTodos, todoActions } from './todoSlice';
import TodoItem from './TodoItem';

import styles from './Todo.module.css';

export function TodoEntity() {
  const list = useSelector(selectAllTodos);

  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const changText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const add = () => {
    dispatch(todoActions.addTodo(text));
    setText('');
  };

  return (
    <div className={styles.content}>
      <div className="flex">
        <Input value={text} onChange={changText} onPressEnter={add} />
        &nbsp;
        <Button onClick={add}>添加</Button>
      </div>
      <div className="mt-4">
        {list.map((item: any) => (
          <TodoItem key={item.todoId} {...item} />
        ))}
      </div>
      <br />
    </div>
  );
}
