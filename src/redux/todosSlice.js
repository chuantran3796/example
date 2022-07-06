import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: { count: 1 },
  reducers: {
    todoAdd(state, action) {
      return (state = state.count + 1);
    },
    todoMinus(state, action) {
      return (state = state.count - 1);
    },
  },
});

export const todoReducer = todosSlice.reducer
export const { todoAdd, todoMinus } = todosSlice.actions;
export default todosSlice.reducer;
