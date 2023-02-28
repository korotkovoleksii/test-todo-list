import { useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks"
import { ITodo } from "../../interfaces/todo.interface"
import { toggleTodo } from "../../store/Todos/todosSlice";
import Modal from "../Modal/Modal";
import './TodoItem.css'

const TodoItem = ({ id, title, description, status }: ITodo): JSX.Element => {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="todoItem" onClick={() => { setIsOpen(true) }}>
                <div className="item">{id}.</div>
                <div className="item">{title}</div>
                <div className="item">{description}</div>
                <div className="item itemCheckBox"><input type="checkbox" checked={status} onClick={(e => {
                    e.stopPropagation();
                })} onChange={(e) => {

                    dispatch(toggleTodo(id))

                }} /></div>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} data={{ id, title, description, status }} />}
        </>
    )
}

export default TodoItem;