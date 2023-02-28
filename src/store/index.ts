import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todosSlice from './Todos/todosSlice';

const rootReducer = combineReducers({
    todos: todosSlice
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
