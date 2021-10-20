import { createSlice } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from './app';
import { getAllContacts } from '../service/api';

const initialState = {
    contacts:[]
}

const contactsReducer = createSlice({
    name:'contacts',
    initialState,
    reducers:{
        setContacts: (state, {payload}) =>{
            state.contacts = payload.contacts
        }
    }
})

export default contactsReducer.reducer;

export const {setContacts} = contactsReducer.actions;

export const contactsSelector = state => state.contacts.contacts

export const getAllContactsAction=()=>{
    return async dispatch =>{
        dispatch(startLoading())
        try{
            //const response = await getAllContacts()
            dispatch(setContacts({contacts: await getAllContacts()}))
        }catch(error){
            console.log(error)
        }finally{
            dispatch(stopLoading())
        }
    }
}