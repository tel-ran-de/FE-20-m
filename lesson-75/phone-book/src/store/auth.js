import {createSlice} from '@reduxjs/toolkit';
import { login, registration } from '../service/api';
import { authSuccess, startLoading, stopLoading } from './app';


const initialState = {
    error: null
}

const AuthReducer = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setError:(state, {payload})=>{
            state.error = payload.error
        },
        clearError: state =>{
            state.error = null
        }
    }
})

export default AuthReducer.reducer;
export const {setError, clearError} = AuthReducer.actions;

export const loginAction = (values)=>{
    return async dispatch =>{
        dispatch(startLoading());
        dispatch(clearError());
        try{
            await login(values);
            dispatch(authSuccess())
        }catch(error){
            dispatch(setError({error:error.message}))
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const registrationAction = (userData)=>{
    return async dispatch =>{
        dispatch(startLoading());
        dispatch(clearError());
        try{
            await registration(userData)            
        }catch(error){
            dispatch(setError({error:error.message}))
        }finally{
            dispatch(stopLoading())
        }
    }
}

export const errorSelector = state => state.auth.error