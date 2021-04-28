import React from "react";
import "./List.css";
import styled from "styled-components";
import ItemDetail from "../ItemDetail/ItemDetail";


export default function List({ listProp }) {
  return (
    <Frame>
      {
      listProp.map((products) => {
        return (
        <ItemDetail key={products.id} id={products.id} />
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