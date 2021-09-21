const users = JSON.parse(localStorage.getItem('users'));

export default users || []  // users ?? []

export const setUsersToLocalStorage = (users) => localStorage.setItem('users', JSON.stringify(users))

export const setCurrentUserLocalStorage = (id) =>{
    localStorage.setItem('currentUserId', JSON.stringify(id))
}

export const getCurrentUserId = ()=>{
   return JSON.parse(localStorage.getItem('currentUserId'))
}

export const resetCurrentUser = ()=>{
    localStorage.removeItem('currentUserId')
}

export const login = (currentUser) =>{
    const user = users.find(u => u.email === currentUser.email)
    return user.password === currentUser.password ? user.id : null
}

