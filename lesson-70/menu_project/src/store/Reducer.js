import Types from './ActionType';  

const init = {
    isLoading: false,
    menu:[],
    error: null,
    cart: [],
    totalPrice:0
}
    
export default function reducer(state = init, {type, payload}){
    switch(type){
        case Types.changeLoader:
            return{
                ...state,
                isLoading: payload
            }
        case Types.getMenu:
            return{
                ...state,
                error: null,
                menu:[...payload]
            } 
        case Types.error:
            return{
                ...state,
                error:payload
            }
        case Types.addItem:
            const cndIndex = state.cart.findIndex((item)=> item.id === payload)
            if(cndIndex>=0){
                const itemInCart = state.cart[cndIndex]
                const newItem = {
                    ...itemInCart,
                    count: itemInCart.count + 1
                }
                return{
                    ...state,
                    cart:[
                        ...state.cart.slice(0, cndIndex),
                        newItem,
                        ...state.cart.slice(cndIndex +1)
                    ],
                    totalPrice : state.totalPrice + newItem.price
                }            
            }
            const item = state.menu.find(el => el.id === payload)
            const newItem = {
                title: item.title,
                price:item.price,
                id: item.id,
                url: item.url,
                count:1
            }
            return {
                ...state,
                cart:[...state.cart, newItem],
                totalPrice: state.totalPrice + newItem.price
            }


        default: return state
    }
}


