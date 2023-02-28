import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { ITodo } from "../../interfaces/todo.interface";
import { addTodo } from "../../store/Todos/todosSlice";
import './NewTodoForm.css'

const NewTodoForm = (): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const dispatch = useAppDispatch();
    const length = useAppSelector(store => store.todos.length);

    const handelOnClickCreate = () => {
        const newTodoItem: ITodo = {
            title: title,
            description: description,
            status: false,
            id: length,

        }
        dispatch(addTodo(newTodoItem))
        setDescription('');
        setTitle('')
    }

    return (
        <div className="todoForm">
            <section>
                <p>Title:</p>
                <input type={'text'} placeholder={'Enter title'} value={title} onChange={(e) => { setTitle(e.target.value) }} />
            </section>
            <section>
                <p>Description:</p>
                <input type={'text'} placeholder={'Enter description'} value={description} onChange={(e) => { setDescription(e.target.value) }} />
            </section>
            <button onClick={handelOnClickCreate}>Create</button>
        </div>
    )
}
export default NewTodoForm;