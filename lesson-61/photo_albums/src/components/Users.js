import { useContext } from 'react';
import { AppContext } from '../App';
import User from './User';
//import { useHistory } from 'react-router-dom';

const Users = ({history})=>{
    const {users, currentUser} = useContext(AppContext);
    //const history = useHistory() 
    return(
        <div className = 'container'>
            <h1 className = 'text-center my-5'>All our users</h1>
            <div className = "row">
                {users.map(user => <User key ={user.id} user = {user}/>)}
            </div>
            <hr/>
            <div className = 'd-grid gap-2 col-4 mx-auto'>
                <button className = 'btn btn-primary'
                        onClick = {()=>history.push('/registration')}>
                    Registration
                </button>
            </div>
        </div>
    )
}

export default Users;