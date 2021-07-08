const SET_CART_ITEM = "SET_CART_ITEM"

export const setCartItem =(cartItem)=>(
    {
        type:SET_CART_ITEM,
        cartItem:cartItem
    }
)

const initialState = {
    cartItem:[]
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_CART_ITEM:
            const {cartItem} = action
            // console.log(state.cartItem)
            return {...state,cartItem: state.cartItem.concat(cartItem)}
        default:
            return state
    }
}