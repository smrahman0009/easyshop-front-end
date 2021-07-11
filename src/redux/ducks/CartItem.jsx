const SET_CART_ITEM = "SET_CART_ITEM"
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
const GET_ITEM_UPDATE = "GET_ITEM_UPDATE"

export const setCartItem =(cartItem)=>(
    {
        type:SET_CART_ITEM,
        cartItem:cartItem
    }
)

export const getItemUpdate=()=>(
    {
        type:GET_ITEM_UPDATE
    }
)
  


export const removeCartItem=(cartItem)=>(
    {
        type:REMOVE_CART_ITEM,
        removedItem:cartItem
    }
)

const initialState = {
    cartItem:[]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_CART_ITEM:
            const {cartItem} = action
            return {...state,cartItem: state.cartItem.concat(cartItem)}
        case REMOVE_CART_ITEM:
            const {removedItem} = action 
            const index = state.cartItem.indexOf(removedItem)
            if(index > -1){
                state.cartItem.splice(index,1)
            }
            // console.log("this is remvoed item: ",removedItem,"cartItems: ",state.cartItem)
            return {...state,cartItem:state.cartItem}
        case GET_ITEM_UPDATE:
            // console.log("get_item_update: ",state)
            return {...state}
        default:
            return state
    }
}