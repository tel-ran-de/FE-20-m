import { useState, useContext} from 'react'
import { AppContext } from '../App'
import Album from './Album'

const UserAlbums = ()=>{
    const {currentUser, addNewAlbum, currentUserAlbums} = useContext(AppContext)

    const [album, setAlbum] = useState({
        title: '',
        cover: '',
        userId: currentUser,
    })

    const changeFieldHandler = event=>{
        setAlbum({...album, [event.target.name]: event.target.value})
    }

    const userAlbums = currentUserAlbums()

    return (
        <div className="col-8 p-3 my-2">
            <h3 className="text-center">My albums</h3>
            <div className ='row p-2'>
                {userAlbums.map(album => <Album key = {album.id} album = {album} />)}
            </div>
            <button className="w-100 btn btn-success"
                type="button"
                data-bs-toggle="modal" data-bs-target="#addAlbumModal">
                add new album</button>
            <div className="modal fade" id="addAlbumModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Make your new photo album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Type album title"
                                value={album.title}
                                onChange={changeFieldHandler}
                            />
                            <input
                                className="form-control my-3"
                                type="text"
                                name="cover"
                                placeholder="Type cover src"
                                value={album.cover}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick = {()=> addNewAlbum(album)}
                                >
                                add album</button>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default UserAlbums