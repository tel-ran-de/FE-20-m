import {fbAuth} from '../config/firbase-config'

export async function login(email, password){
    try{
           
        const response = await fbAuth.signInWithEmailAndPassword(email, password);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)

    }catch(error){
        console.log(error)
        await Promise.reject(error)
    }
}

export async function registration(email, password){
    try{
        const response = await fbAuth.createUserWithEmailAndPassword(email, password);
        console.log(response)
        localStorage.setItem('USER_ID', response.user.uid)

    }catch(error){
        console.log(error.message)
        await Promise.reject(error)
    }
}



