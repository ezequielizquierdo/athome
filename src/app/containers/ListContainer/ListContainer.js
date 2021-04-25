import React, { useState, useEffect } from "react";
import "./ListContainer.css";
import List from '../../components/List/List'

export default function ListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => 
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch(err => console.log(err)), 2000)
  }, []);

  return (
    <div className="list_container">
      <List listProp={products} />
    </div>
  );
}
