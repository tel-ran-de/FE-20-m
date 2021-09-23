import { useContext } from 'react';
import { AppContext } from '../App';
import Album from './Album'

const Albums = ()=>{
    const {albums} = useContext(AppContext)


    return(
        <div className = 'container'>
            <h1 className = 'text-center my-5'>All our albums</h1>
            <div className = "row row-cols-2 row-cols-md-4">
              {albums.map(album => <Album key = {album.id} album ={album} />)}
            </div>        
        </div>
    )
}

export default Albums;