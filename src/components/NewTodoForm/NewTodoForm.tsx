import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { ITodo } from "../../interfaces/todo.interface";
import { addTodo } from "../../store/Todos/todosSlice";
import './NewTodoForm.css'

interface IForm {
    title: string,
    description: string,
}

const NewTodoForm = (): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [formErrors, setFormErrors] = useState<IForm>({ title: '', description: '' });
    const dispatch = useAppDispatch();
    const length = useAppSelector(store => store.todos.length);

    const handelOnClickCreate = () => {
        if (!title.length) {
            setFormErrors({ ...formErrors, title: 'This field is empty' })
        }
        else if (!description.length) {
            setFormErrors({ ...formErrors, description: 'This field is empty' })
        } else {

            const newTodoItem: ITodo = {
                title: title,
                description: description,
                status: false,
                id: length,

            }
            dispatch(addTodo(newTodoItem))
            setDescription('');
            setTitle('')
            setFormErrors({ title: '', description: '' });
        }
    }

    return (
        <div className="todoForm">
            <section>
                <p>Title:</p>
                <input type={'text'} className={formErrors.title ? 'input-error' : ''} placeholder={'Enter title'} value={title} onChange={(e) => { setTitle(e.target.value) }} />
                {formErrors.title && (
                    <p className="error-label">{formErrors.title}</p>
                )}
            </section>
            <section>
                <p>Description:</p>
                <input type={'text'} className={formErrors.title ? 'input-error' : ''} placeholder={'Enter description'} value={description} onChange={(e) => { setDescription(e.target.value) }} />
                {formErrors.description && (
                    <p className="error-label">{formErrors.description}</p>
                )}

            </section>
            <button onClick={handelOnClickCreate}>Create</button>
        </div>
    )
}
export default NewTodoForm;