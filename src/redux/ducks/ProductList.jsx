export const GET_PRODUCT_LIST = "GET_PRODUCT_LIST"
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST"

export const getProductList =()=>(
    {type:GET_PRODUCT_LIST}
)

export const setProductList =(productList)=>(
    {
        type:SET_PRODUCT_LIST,
        productList:productList
    }
)

const initialState = {
    productList:undefined
}

export default (state=initialState,action)=>{
    switch(action.type){
        case SET_PRODUCT_LIST:
            const {productList} = action
            return {...state,productList}
        default:
            return state
    }
}