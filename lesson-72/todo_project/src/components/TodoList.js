import { changeTodoStatus, removeTodo, todoSelector } from '../todo_store/todoReducer/TodoReducer';
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
    const todos = useSelector(todoSelector)
    const dispatch = useDispatch()

    return (
        <ul>
            {
                todos.map((todo, index) =>
                    <li key={index}>
                        <div className='row'>
                            <input className='check_box' type="checkbox"
                                checked={todo.status}
                                onChange={e => dispatch(changeTodoStatus({index, status:e.target.checked}))} />
                            <span style={{ textDecoration: todo.status ? 'line-through' : 'none' }}>{todo.title}</span>
                            <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
                        </div>
                    </li>)
            }
        </ul>
    )
}


export default TodoList