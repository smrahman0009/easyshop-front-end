import Home from "./layouts/pages/Home";
import React, { useEffect } from "react";
import {commerce} from "./lib/Commerce" 
function App() {
  const [pdts,setPdts] = React.useState([])

  // commerce.products.list().then((products) => {
  //   // console.log(products.data)
  //   setPdts(products.data);
  // }).catch((error) => {
  //   console.log('There was an error fetching the products', error);
  // })
  // console.log(pdts)

  useEffect(()=>{
    commerce.products.list().then((products)=>{
      setPdts(products.data)
    })
    console.log("products change",pdts)
  })
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
