

import { createPortal } from 'react-dom';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { ITodo } from '../../interfaces/todo.interface';
import { toggleTodo } from '../../store/Todos/todosSlice';
import './Modal.css'

const Modal = ({ setIsOpen, data }: { setIsOpen: (state: boolean) => void, data: ITodo }) => {
    const dispatch = useAppDispatch();

    const close = () => {
        setIsOpen(false);
    }

    return (
        createPortal(<div className='modal' onClick={close}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <p className='modalTitle'>{data.title}</p>
                <p className='modalTitleDescription'>Description:</p>
                <p >{data.description}</p>
                <section className='statusSection'>
                    <p>Status:</p>
                    <input type="checkbox" checked={data.status} onChange={(e) => {
                        dispatch(toggleTodo(data.id))
                    }} />
                </section>
                <button onClick={() => { setIsOpen(false) }}>close</button>
            </div>

        </div >, document.getElementById('app-modal')!))
}

export default Modal;