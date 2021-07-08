import { takeLatest } from "@redux-saga/core/effects";
import {GET_PRODUCT_LIST} from "../ducks/ProductList"
import { handleGetProductsList } from "./handlers/productList";

export function* watcherSaga(){
    yield takeLatest(GET_PRODUCT_LIST,handleGetProductsList)
}