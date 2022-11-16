import { combineReducers } from 'redux';

import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/todos/todoSlice';
import todoEntityReducer from '../features/todosEntity/todoSlice';
import visibilityFilterReducer from '../features/filters/filtersSlice';

export default combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  todoEntity: todoEntityReducer,
  visibilityFilter: visibilityFilterReducer,
});
