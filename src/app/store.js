import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../reducers/todosSlice'; // Замініть це на правильний шлях до вашого slice

export const store = configureStore({
    reducer: {
        todo: todosReducer,
    },
});
