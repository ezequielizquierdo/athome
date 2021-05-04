import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useHistory } from "react-router";
import { getProducts } from "../../../Services/post_services";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const history = useHistory();

  function onHandleClick(product) {
    history.push(`/Escritorios/${product.id}`);
  }

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return (
    <>
      <div className="list_container">
        <ItemList handleClick={onHandleClick} listProp={products} />
      </div>
    </>
  );
}
