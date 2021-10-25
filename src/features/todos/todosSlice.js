import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload];
    },
    doneTask: (state, action) => {
      state[action.payload].done = !state[action.payload].done;
      return state;
    },
    removeTask: (state, action) => {
      return state.filter((el) => {
        return el.id !== action.payload.id;
      });
    },
  },
});

export const { addTask, doneTask, removeTask } = todosSlice.actions;

export const selectTodo = (state) => state.todos;

export default todosSlice.reducer;
