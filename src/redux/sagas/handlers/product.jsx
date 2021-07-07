import { call,put } from "@redux-saga/core/effects";
import { setProduct } from "../../ducks/Product";
import { requestGetProducts } from "../requests/product";

export function* handleGetProducts(action){
    try{
        const response = yield call(requestGetProducts)
        // const {product} = response
        // console.log("handle =>",response)
        yield put(setProduct(response))
    }catch(error){
        console.log(error)
    }
}