import React from "react";
import Item from "../Item/Item";
import "./List.css";
import styled from "styled-components";


export default function List({ listProp }) {
  return (
    <Frame>
      {
      listProp.map((products) => {
        return (
        <Item key={products.id} products={products} />
        )
      })
      }
    </Frame>
  );
}


const Frame = styled.ul`
  display: flex;
  gap: .8rem;
  border-radius: 1px;
  padding: 10px;
  background-color: whitesmoke;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;