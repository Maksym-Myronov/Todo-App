import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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
    reducers: {},
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

export default todoSlice.reducer;
export const selectAllTodos = (state) => state.todo.todos