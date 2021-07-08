import { call,put } from "@redux-saga/core/effects";
import { setProductList } from "../../ducks/ProductList";
import { requestGetProductsList } from "../requests/productList";

export function* handleGetProductsList(action){
    try{
        const response = yield call(requestGetProductsList)
        // const {product} = response
        // console.log("handle =>",response)
        yield put(setProductList(response))
    }catch(error){
        console.log(error)
    }
}