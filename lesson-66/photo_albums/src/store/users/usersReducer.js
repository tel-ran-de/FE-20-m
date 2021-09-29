import Types from './actionTypes';

const init = {
    users:[],
    currentUser: null,
    loading: false,
    error: null
}

const usersReducer = (state = init, {type, payload})=>{
    switch(type){
        case Types.initState:
            return{
                ...state,
                users: [...payload.users],
                currentUser: payload.currentUser,
                loading: false
            }
        case Types.registration:
            return{
                ...state,
                users: [...state.users, payload],
                currentUser:payload,
                loading:false
            }    
        case Types.load:
        return {
            ...state,
            error: null,
            loading: true
        }
        case Types.error:
            return{
                ...state,
                loading: false,
                error: payload
            }
        default: return state
    }
}

export default usersReducer