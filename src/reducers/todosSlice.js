import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    error: null,
    status: 'idle'
};

export const fetchTodo = createAsyncThunk("fetchTodo", async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
        return {todos: data};
    } catch (error) {
        return rejectWithValue({ errorMessage: error.message });
    }
});

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
            const newText = {
                id: nanoid(),
                title: action.payload.title,
                completed: action.payload.completed
            }
            state.todos = [newText, ...state.todos]
        },
        changeTodos: (state, action) => {
            const {id, newText} = action.payload;
            const todoToChange = state.todos.find((todo) => todo.id === id)
            if(todoToChange) {
                todoToChange.title = newText
            }
        },
        removeTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTodo.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTodo.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.todos = action.payload.todos;
        })
        .addCase(fetchTodo.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload.errorMessage;
        });
    },
});

export const { addNewTask, removeTask, changeTodos } = todoSlice.actions;
export const selectItemsCount = (state) => state.todo.todos.length;
export default todoSlice.reducer;
export const selectAllTodos = (state) => state.todo.todos