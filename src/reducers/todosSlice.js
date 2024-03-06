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
    toggleCompleted: (state, action) => {
      const { id } = action.payload;
      const todoToToggle = state.todos.find((todo) => todo.id === id);
      if (todoToToggle) {
        todoToToggle.completed = !todoToToggle.completed;
      }
    },
  },
});

export const { addNewTask, removeTask, changeTodos, toggleCompleted } =
  todoSlice.actions;
export const selectItemsCount = (state) => state.todo.todos.length;
export const selectAllItemsFromTodo = (state) => state.todo.todos;
export default todoSlice.reducer;
