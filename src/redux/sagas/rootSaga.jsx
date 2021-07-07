import { takeLatest } from "@redux-saga/core/effects";
import {GET_PRODUCT} from "../ducks/Product"
import { handleGetProducts } from "./handlers/product";

export function* watcherSaga(){
    yield takeLatest(GET_PRODUCT,handleGetProducts)
}