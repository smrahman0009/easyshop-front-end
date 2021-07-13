const SET_CART_ITEM = "SET_CART_ITEM"
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
const GET_ITEM_UPDATE = "GET_ITEM_UPDATE"
const INC_CART_QTY = "INC_CART_QTY"
const DEC_CART_QTY = "DEC_CART_QTY"

export const incCartQty=(cartItem)=>(
    {
        type:INC_CART_QTY,
        targetItem:cartItem
    }
)

export const decCartQty=(cartItem)=>(
    {
        type:DEC_CART_QTY,
        targetItem:cartItem
    }
)
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
            // console.log(cartItem)
            cartItem["cart_item_qty"] = 1
            return {...state,cartItem: state.cartItem.concat(cartItem)}
        case REMOVE_CART_ITEM:
            const {removedItem} = action 
            const index = state.cartItem.indexOf(removedItem)
            if(index > -1){
                state.cartItem.splice(index,1)
            }
            return {...state,cartItem:state.cartItem}
        case GET_ITEM_UPDATE:
            return {...state}
        case INC_CART_QTY:
            const {targetItem} = action
            const itemIndex = state.cartItem.indexOf(targetItem)
            targetItem.cart_item_qty +=1
            state.cartItem[itemIndex] = targetItem
            // console.log("targetItem:",targetItem,"cartItems:",state.cartItem)
            return {...state,cartItem:state.cartItem}
        case DEC_CART_QTY:
                // const {targetItem} = action
                return {...state,cartItem:targetItem.cart_item_qty-1}
        default:
            return state
    }
}