import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITodo } from '../../interfaces/todo.interface';



const initialState: ITodo[] = [];

const todosSlice = createSlice({
    name: '@@todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.push(action.payload);
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            state.forEach((item) => {
                if (item.id === action.payload) {
                    item.status = !item.status;
                }
            })
        }
    },


});

export const { addTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;


