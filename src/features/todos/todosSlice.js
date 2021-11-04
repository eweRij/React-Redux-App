import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { addTaskDB, getTasks, setDone, deleteTask } from "../../utils/api";

export const fetchTasks = createAsyncThunk(
  "todos/getTasks",
  async (id) =>
    await getTasks(id)
      .then((resp) => resp.data)
      .catch((err) => err)
);

export const addTask = createAsyncThunk("todos/addTask", async (data) => {
  const { id, task } = data;
  const response = await addTaskDB(id, task);
  return response.data;
});

export const doneTask = createAsyncThunk("todos/doneTask", async (data) => {
  const { id, user } = data;
  const response = await setDone(id, user);
  return response.data;
});

export const removeTask = createAsyncThunk("todos/removeTask", async (data) => {
  const { id, user } = data;
  const response = await deleteTask(id, user);
  return response.data;
});

const initialState = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchTasks.fulfilled.type]: (state, action) => {
      return action.payload;
    },
    [addTask.fulfilled.type]: (state, action) => {
      return [...state, action.payload];
    },
    [doneTask.fulfilled.type]: (state, action) => {
      const changedTask = { ...action.payload, done: !action.payload.done };
      state.forEach((task, index) => {
        if (task.id === action.payload.id) {
          state[index] = changedTask;
          return state;
        }
      });
    },
    [removeTask.fulfilled.type]: (state, action) => {
      return state.filter((el) => {
        return el.id !== action.payload;
      });
    },
  },
});

// export const { removeTask } = todosSlice.actions;

export const selectTodo = (state) => state.todos;

export default todosSlice.reducer;
