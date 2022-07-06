import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./todosSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
