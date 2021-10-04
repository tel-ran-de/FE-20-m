import Type from './BooksActionTypes';
import { startLoading, stopLoading } from '../appReducer/AppActionsCreator';
import { getBooksFromLocalStorage, addBookToStorage } from '../../data/books';

export const getAllBooks = ()=>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                dispatch(_getAllBooks())
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        }, 2000)
    }
}

export const addBookToBooks = (book) =>{
    return dispatch =>{
        dispatch(startLoading())
        setTimeout(()=>{
            try{
                addBookToStorage(book)
                dispatch(_addBook(book))
                dispatch(stopLoading())
            }catch(e){
                console.log(e.message)
            }
        },2000)
    }
}

const _getAllBooks = ()=>{
    return{
            type: Type.getAllBooks,
            payload: getBooksFromLocalStorage()
    }
}

const _addBook = (book)=>{
    return{
        type: Type.addBook,
        payload:book
    }
}