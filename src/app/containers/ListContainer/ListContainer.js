import { List } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ListContainer.css";

export default function ListContainer() {
  const [products, setProducts] = useState([]);

  setTimeout(
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []), 2000);

  return (
    <div className="list_container">
      <List listprop={products} />
    </div>
  );
}
