import React from "react";
import Item from "../Item/Item";
import "./List.css";

export default function List({ listProp }) {
  return (
    <ul>
      {
      listProp.map((products) => {
        return (
        <Item key={products.id} products={products} />
        )
      })
      }
    </ul>
  );
}
