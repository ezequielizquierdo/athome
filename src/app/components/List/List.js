import React from "react";
import Item from "../Item/Item";
import "./List.css";

export default function List({ listprop }) {
  return (
    <ul>
      {
      listprop.map((products) => {
        return (
        <Item key={products.id} products={products} />
        )
      })
      }
    </ul>
  );
}
