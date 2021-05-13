import {useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import getProducts from "../../../Services/post_services";



export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    getProducts(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
        <Container>
            <ItemDetail product={product}/>
        </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  background-color: whitesmoke;
  flex-direction: row;
  padding: 30px;
`;
 