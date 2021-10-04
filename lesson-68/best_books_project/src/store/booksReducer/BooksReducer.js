import Type from './BooksActionTypes';

const init = {
    books:[]
}

const BooksReducer = (state = init, {type, payload})=>{
    switch(type){
        case Type.getAllBooks:
            return {...state, books: [...payload]}
        case Type.addBook:
            return{ ...state, books: [...state.books, payload]}  
        default: return state     
    }
}

export default BooksReducer