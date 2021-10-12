//import TodoActionType from './TodoActionType';
import { createSlice } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../appReducer/AppReducer';

const initialState = {
    todos: []
}

const todoReducer = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, {payload}) =>{
            state.todos.push({title:payload.title, status:false})
        },
        changeTodoStatus:(state,{payload})=>{
            console.log(payload)
            state.todos[payload.index].status = payload.status
        },
        removeTodo: (state, {payload})=>{
            state.todos.splice(payload.index, 1)
        }
    }
})

export const {addTodo, changeTodoStatus, removeTodo} = todoReducer.actions
export default todoReducer.reducer
export const todoSelector = state => state.todo.todos

export const addTodoAction = (text)=>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            dispatch(addTodo({title:text}))
            dispatch(stopLoading())
        },1000)
    }
}



/* const init = {
    todos: []
}

const todoReducer = (state = init, { type, payload }) => {
    switch (type) {
        case TodoActionType.addTodo:
            return { ...state, todos: [...state.todos, payload.todo]}
        case TodoActionType.changeStatus:
            return changeTodoSatus(state, payload.index, payload.status)
        case TodoActionType.removeTodo:
            return removeTodoByIndex(state, payload.index)
        default: return state
    }
}

const changeTodoSatus = (state, index, status) => {
    const tmpTodos = [...state.todos]
    tmpTodos[index] = { ...tmpTodos[index], status: status }
    return { ...state, todos: tmpTodos }
}

const removeTodoByIndex = (state, index) => {
    const tmpTodos = [...state.todos]
    tmpTodos.splice(index, 1)
    return {...state, todos: tmpTodos}
}

export default todoReducer */