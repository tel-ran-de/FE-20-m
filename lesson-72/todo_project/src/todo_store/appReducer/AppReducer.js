//import AppActionType from './AppActionType'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    auth:false
}

const appReducer = createSlice({
    name:'app',
    initialState,
    reducers:{
        startLoading: state =>{
            state.isLoading = true
        },
        stopLoading: state =>{
            state.isLoading = false
        },
        authSucces: state =>{
            state.auth = localStorage.getItem('USER_ID') !==null   
        }
    }
})


export default appReducer.reducer;
export const {startLoading, stopLoading, authSucces} = appReducer.actions;
export const appSelector = state => state.app