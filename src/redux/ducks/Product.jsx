const SET_PRODUCT = "SET_PRODUCT"

export const setProduct =(product)=>(
    {
        type:SET_PRODUCT,
        product:product
    }
)

const initialState = {
    product:undefined
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_PRODUCT:
            const {product} = action
            // console.log(product)
            return {...state,product}
        default:
            return state
    }
}