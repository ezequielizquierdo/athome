import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { getProductsById } from "../../../Services/post_services";
import Spinner from "../../components/Spinner/Spinner";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProductsById(id).then((res) => setProduct(res));
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 700);
    return () => clearTimeout(timer);
  }, [id]);

  return (
    <div>
      <Container>
        {isLoading ? <ItemDetail product={product} /> : <Spinner></Spinner>}
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
