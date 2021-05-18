import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../../components/ItemList/ItemList";
import { useHistory } from "react-router";
import { getCollection, getProducts } from "../../../Services/post_services";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  function onHandleClick(product) {
    history.push(`/products/${product.id}`);
  }

  useEffect(() => {
    getProducts()
    .then((products) => setProducts(products));
  }, []);

// useEffect(() => {
//   const unsuscribe = getCollection().onSnapshot(onSnapshot => {
//     const productResponse = snapshot.docs.map(getDocDataAndId)
//     setProducts(productResponse)
//   })
//   return() => {
//     unsuscribe
//   }
// }
// )


  return (
    <>
      <div className="list_container">
        <ItemList handleClick={onHandleClick} listProp={products} />
      </div>
    </>
  );
}
