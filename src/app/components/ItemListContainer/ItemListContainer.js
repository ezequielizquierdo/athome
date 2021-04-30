import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import mockjson from "../../../assets/Data/data";






export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  //   useEffect(() => {
  //     setTimeout(() =>
  //     fetch("http://my-json-server.typicode.com/ezequielizquierdo/mockjson/products")
  //       .then((response) => response.json())
  //       .then((data) => setProducts(data))
  //       .catch(err => console.log(err)), 500)
  //   }, []);
  //   return (
  //     <div className="list_container">
  //       <ItemList listProp={products} />
  //     </div>
  //   );
  // }

  useEffect(
    () => {
    new Promise((resolve, reject) => {
      setTimeout(() => 
      resolve(mockjson),
       500
       );
    }).then((result) => setProducts(result));
  },
  []
  );

  return <>

  <div className="list_container">
    <ItemList listProp={products} />
  </div>
  </>
}
