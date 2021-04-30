import React from "react";
import "./../Item/Item.css";
import styled from "styled-components";
import Item from "../Item/Item";


export default function ItemList({ listProp }) {
  return (
    <Frame>
      {
      listProp.map((products) => {
        return (
        <Item key={products.id} id={products.id} />
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
  justify-content: center;
`;