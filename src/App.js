import Home from "./layouts/pages/Home";
import React, { useEffect } from "react";
import {commerce} from "./lib/Commerce" 
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "./redux/ducks/ProductList";
function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProductList())
  },[dispatch])
  const productList = useSelector((state)=>state.productList.productList)
  console.log("In App => ",productList)
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
