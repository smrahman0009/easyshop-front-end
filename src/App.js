import Home from "./layouts/pages/Home";
import React, { useEffect } from "react";
import {commerce} from "./lib/Commerce" 
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "./redux/ducks/Product";
function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProduct())
  },[dispatch])
  const product = useSelector((state)=>state.product.product)
  console.log("In App => ",product)
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
