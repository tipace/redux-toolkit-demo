import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export interface TodoState {
  id: string;
  text: string;
  completed?: boolean;
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state: TodoState[], action: PayloadAction<TodoState>) {
        const { id, text } = action.payload;
        state.push({ id, text, completed: false });
      },
      prepare(text: string) {
        /* nanoid 随机一个字符串 */
        return { payload: { text, id: nanoid() } };
      },
    },
    toggleTodo(state: TodoState[], action: PayloadAction<string>) {
      const todo = state.find((todo: { id: any }) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
