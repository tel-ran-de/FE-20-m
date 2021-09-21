import { Route, Switch } from 'react-router-dom';
import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Users from './components/Users';
import Albums from './components/Albums';
import Home from './components/Home';
import usersArray, {getCurrentUserId, setCurrentUserLocalStorage, setUsersToLocalStorage, login, resetCurrentUser} from './data/usersData';
import Registration from './components/Registration';
import Login from './components/Login';

export const AppContext = React.createContext()

function App() {
  const [users, setUsers] = useState(usersArray);
  const [currentUser, setCurrentUser] = useState(getCurrentUserId());
  const [error, setError] = useState (null)

  const addUser = (user)=>{
    const newUser = {...user, id: Date.now()}
    const newUsersArray = [...users, newUser]
    setUsers(newUsersArray)
    setUsersToLocalStorage(newUsersArray)
  }

  const changeCurrentUser = (currentUser) =>{
    const idUser = login(currentUser)
    if(idUser){
      setCurrentUser(idUser);
      setCurrentUserLocalStorage(idUser)
    }else{
      setError('login or passwird is wrong')
    }
  }

  const getUserNameById = (id)=>{
    return users.find(user => +user.id === id).fName
  }

  const logout = ()=>{
    setCurrentUser(null)
    resetCurrentUser()
  }

  return (
    <AppContext.Provider value = {{
      users,
      addUser,
      changeCurrentUser,
      currentUser,
      getUserNameById,
      logout
    }} >
      <Navigation />
      <Switch>       
        <Route path ="/users" component ={Users} /> 
        <Route path ="/albums" component ={Albums} />
        <Route path ="/login" component = {Login} />
        <Route path = "/registration" component = {Registration} />
        <Route path ="/" component ={Home} />
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
