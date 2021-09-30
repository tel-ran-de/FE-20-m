import { useContext } from 'react'
import { AppContext } from '../App'
import { useHistory } from 'react-router-dom';

const Album = ({album, userName})=>{
    const {getCountPhotoByAlbumId} = useContext(AppContext);
    const history = useHistory()

    return(
        <div className = "col">
            <div className="card text-center h-100 mb-3 px-2">    
            <div className="card-body">
            <img src={album.cover} className="card-img-top" alt="..." />
            </div>   
                <h5 className="card-title">{album.title}</h5>
                <p>album by: {userName}</p>
                <p>{getCountPhotoByAlbumId(album.id)} pictures</p>
                <button className = "btn btn-primary btn-sm mb-3"
                         onClick = {()=>{
                             history.push(`/album/${album.id}/${userName}`)
                         }}>View album</button>
            </div>             

        </div>
    )

}

export default Album