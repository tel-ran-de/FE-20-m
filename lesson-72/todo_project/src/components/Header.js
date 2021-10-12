import {useDispatch} from 'react-redux'
import { addTodoAction } from '../todo_store/todoReducer/TodoReducer';
import { useState } from 'react';


const Header = ()=>{
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    return(
        <form className = 'row' action = '#' 
                 onSubmit = {e =>{
                     e.preventDefault();
                     dispatch(addTodoAction(input));
                     setInput('') 
                 }}>
             <input type ='text' name = 'text' placeholder = "Type todo" 
                    value = {input}
                    onChange = {e=>setInput(e.target.value)}/>
             <button type ='submit'>Add todo</button>       
            </form>
    )
}


export default Header