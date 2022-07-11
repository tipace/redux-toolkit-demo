import React, { useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { Input, Button } from 'antd';
import { RootState } from '../../app/store';
import { Filters } from '../filters/Filters';
import { VisibilityFilters } from '../filters/filtersSlice';
import { addTodo, toggleTodo, TodoState } from './todoSlice';
import TodoItem from './TodoItem';

import styles from './Todo.module.css';

const selectTodos = (state: RootState) => state.todo;
const selectFilter = (state: RootState) => state.visibilityFilter;

const selectList = createSelector(selectTodos, selectFilter, (todo, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todo;
    case VisibilityFilters.SHOW_COMPLETED:
      return todo.filter((t: TodoState) => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todo.filter((t: TodoState) => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
});

export function Todo() {
  const list = useSelector((state: RootState) => selectList(state));

  // const list = useSelector((state: RootState) => {
  //   console.log('useSelector');
  //   const { todo, visibilityFilter } = state;
  //   switch (visibilityFilter) {
  //     case VisibilityFilters.SHOW_ALL:
  //       return todo;
  //     case VisibilityFilters.SHOW_COMPLETED:
  //       return todo.filter((t: TodoState) => t.completed);
  //     case VisibilityFilters.SHOW_ACTIVE:
  //       return todo.filter((t: TodoState) => !t.completed);
  //     default:
  //       throw new Error('Unknown filter: ' + visibilityFilter);
  //   }
  // });

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
      <Filters />
      <div className="flex mt-4">
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
    </div>
  );
}
