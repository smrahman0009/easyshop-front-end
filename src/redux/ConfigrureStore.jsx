import createSagaMiddleware from "@redux-saga/core";
import { combineReducers, createStore,applyMiddleware } from "redux";
import counterReducer from "./ducks/Counter"
import productListReducer from "./ducks/ProductList"
import productReducer from "./ducks/Product"
import { watcherSaga } from "./sagas/rootSaga";

const reducer = combineReducers({
    counter: counterReducer,
    productList:productListReducer,
    product:productReducer
})

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware]

const store = createStore(reducer,{},applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store