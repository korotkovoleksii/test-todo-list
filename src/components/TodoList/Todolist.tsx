
import { useAppSelector } from "../../hooks/redux-hooks";

import TodoItem from "../TodoItem/TodoItem";
import './Todolist.css'

const TodoList = (): JSX.Element => {

    const todos = useAppSelector(state => state.todos)
    return (
        <div className="container">
            <div className="headerList">
                <div className="headerItem">ID</div>
                <div className="headerItem">TITLE</div>
                <div className="headerItem">DESCRIPTION</div>
                <div className="headerItem">STATUS</div>
            </div>
            <div className="itemsList">
                {todos.map((item) => (<TodoItem key={item.id} {...item}></TodoItem>))}
            </div>


        </div>
    )
}
export default TodoList;