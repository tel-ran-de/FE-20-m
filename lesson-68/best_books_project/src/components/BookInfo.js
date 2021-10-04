import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllBooks } from '../store/booksReducer/BooksActionsCreator'
import Loader from './Loader'


const BookInfo = ({ match, history, books, getBooks }) => {

    useEffect(()=>{
        if(books.length === 0)
        getBooks()
        // eslint-disable-next-line
    }, [])

    const bookId = +match.params.id
    const book = books.find(b => b.id === bookId)
    return (
        books.length ===0 ? <Loader /> :
        <div className='container mt-5 w-50'>
            <div className="card text-center mb-3 px-3">
                <div className="card-body">
                    <h3 className="card-title">{book.title}</h3>
                    <h5>by: {book.author}</h5>
                    <img src={book.cover} className="card-img-top" alt="..." />
                </div>
                    <p className = "mt-3">{book.description}</p>
                <button className="btn btn-primary btn-sm mb-3"
                    onClick={() => {
                        history.push(`/books`)
                    }}>Back to list</button>
            </div>
        </div>

    )
}

const mapStateToProps = ({ BooksReducer }) => {
    return {
        books: BooksReducer.books
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        getBooks: ()=>dispatch(getAllBooks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfo)

