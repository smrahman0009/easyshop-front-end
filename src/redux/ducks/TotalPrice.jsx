const INC_TOTAL_PRICE = "INC_TOTAL_PRICE"
const DEC_TOTAL_PRICE = "DEC_TOTAL_PRICE"

export const incTotalPrice =(amount)=>(
    {type:INC_TOTAL_PRICE,amount:amount}
)

export const decTotalPrice =(amount)=>(
    {type:DEC_TOTAL_PRICE,amount:amount}
)

const initialState = {
    price:0
}

export default (state=initialState,action)=>{
    const {type,amount} = action
    switch(type){
        case INC_TOTAL_PRICE:
            return {...state,price:state.price+amount}
        case DEC_TOTAL_PRICE:
            return {...state,price:state.price-amount}
        default:
            return state
    }
}