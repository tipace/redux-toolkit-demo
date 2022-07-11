import { createSlice, PayloadAction, createEntityAdapter, nanoid, EntityState } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface TodoPayload {
  todoId: string;
  text: string;
  completed?: boolean;
  createdTimestamp: number;
}

/* 创建EntityAdapter */
const todoAdapter = createEntityAdapter<TodoPayload>({
  /* 默认值为id */
  selectId: (todo) => todo.todoId,
  /* 对ids进行排序，方法与Array.sort相同，如果不提供，不能保证ids顺序 */
  sortComparer: (a, b) => a.createdTimestamp - b.createdTimestamp,
});

const todosSlice = createSlice({
  name: 'todosEntity',
  initialState: todoAdapter.getInitialState(),
  reducers: {
    /* 增 */
    addTodo: {
      reducer(state: EntityState<TodoPayload>, action: PayloadAction<TodoPayload>) {
        todoAdapter.addOne(state, action.payload);
      },
      prepare(text: string) {
        return {
          payload: {
            text,
            todoId: nanoid(),
            createdTimestamp: Date.now(),
          },
        };
      },
    },
    /* 删 */
    removeTodo(state: EntityState<TodoPayload>, action: PayloadAction<string>) {
      todoAdapter.removeOne(state, action.payload);
    },
    /* 改 */
    toggleTodo(state: EntityState<TodoPayload>, action: PayloadAction<string>) {
      const todo = state.entities[action.payload];
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

/* 查 */
export const { selectAll: selectAllTodos } = todoAdapter.getSelectors((state: RootState) => state.todoEntity);

/* action */
export const { actions: todoActions } = todosSlice;
/* reducer */
export default todosSlice.reducer;
