import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from 'antd';
import { Filters } from '../filters/Filters';
import { addTodo, toggleTodo } from './todoSlice';
import TodoItem from './TodoItem';

import styles from './Todo.module.css';

export function Todo() {
  const list = useSelector((state: any) => state.todo);
  const dispatch = useDispatch();

  const [text, setText] = useState('');

  const changText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const add = () => {
    dispatch(addTodo(text));
    setText('');
  };

  const toogle = (id: string) => () => {
    dispatch(toggleTodo(id));
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
          <TodoItem key={item.id} {...item} onClick={toogle(item.id)} />
        ))}
      </div>
      <br />
      <Filters />
    </div>
  );
}
