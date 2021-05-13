import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import ItemList from "../ItemList/ItemList";
import styled from "styled-components";
import getProducts from "../../../Services/post_services";

export default function Categories() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  const history = useHistory();

  function onHandleClick(product) {
    history.push(`/products/${product.id}`);
  }

  // useEffect(() => {
  //   getProductByCategory(category)
  //   .then((products) => setProducts(products));
  // }, [category]);

  useEffect(() => {
    getProducts()
    .then((res) =>setProducts(
        res.filter(function (product) {
          return product.category === category;
        })
      )
    );
  }, [category]);

  return (
    <ListContainer>
      <CategoryTitle style={{ textTransform: "uppercase" }}>
        {category}
      </CategoryTitle>
      <ItemList handleClick={onHandleClick} listProp={products} />
    </ListContainer>
  );
}

const CategoryTitle = styled.div`
  height: 10vh;
  display: flex;
  border-bottom: 0.5px solid lightgray;
  background-color: whitesmoke;
  justify-content: center;
  align-items: center;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
