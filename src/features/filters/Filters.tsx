import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { VisibilityFilters, setVisibilityFilter } from './filtersSlice';
import { RootState } from '../../app/store';

export function Filters() {
  const filter = useSelector((state: RootState) => state.visibilityFilter);
  const dispatch = useDispatch();

  const changeFilter = (e: RadioChangeEvent) => {
    dispatch(setVisibilityFilter(e.target.value));
  };
  return (
    <Radio.Group value={filter} onChange={changeFilter}>
      {Object.values(VisibilityFilters).map((item) => (
        <Radio.Button key={item} value={item}>
          {item}
        </Radio.Button>
      ))}
    </Radio.Group>
  );
}
