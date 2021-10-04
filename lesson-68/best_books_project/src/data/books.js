export const getBooksFromLocalStorage = ()=>{
    const books = JSON.parse(localStorage.getItem('books'))
    return books || []
}

export const addBookToStorage = (book) =>{
    const books = [...getBooksFromLocalStorage(), book]
    localStorage.setItem('books', JSON.stringify(books))
}