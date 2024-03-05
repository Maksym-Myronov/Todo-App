import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      const newText = {
        id: nanoid(),
        title: action.payload.title,
        completed: action.payload.completed,
      };
      state.todos = [newText, ...state.todos];
    },
    changeTodos: (state, action) => {
      const { id, newText } = action.payload;
      const todoToChange = state.todos.find((todo) => todo.id === id);
      if (todoToChange) {
        todoToChange.title = newText;
      }
    },
    removeTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addNewTask, removeTask, changeTodos } = todoSlice.actions;
export const selectItemsCount = (state) => state.todo.todos.length;
export default todoSlice.reducer;
