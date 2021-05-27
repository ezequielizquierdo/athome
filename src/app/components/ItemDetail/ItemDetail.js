import React, { useContext, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../Context/CartContext";
import SwipeableTemporaryDrawer from "../Drawer/Drawer";
import { Animated } from "react-animated-css";

const useStyles = makeStyles({
  img: {
    width: "100%",
  },
  oculto: {
    backgroundColor: "#f08080",
    borderRadius: "8px",
    border: "0.1px solid #d3d3d3",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%)",
    width: "12vw",
    "&:hover": {
      backgroundColor: "#de7676",
    },
  },
});

export default function ItemDetail({ product }) {
  const { addToCart } = useContext(CartContext);
  const [show, setShow] = useState(true);
  let cantidadCompra;

  const classes = useStyles();

  function onAdd(cantidad) {
    setShow({
      hidden: true,
    });
    cantidadCompra = cantidad;
    productSelected();
  }

  function productSelected() {
    const newItem = {
      id: product.id,
      category: product.category,
      title: product.title,
      price: product.price,
      cantidad: cantidadCompra,
      description: product.description,
      image: product.image,
    };
    addToCart(newItem);
  }

  return (
    <>
      <Animated animationIn="fadeIn">
        <Container>
          <ContainerImg>
            <Img>
              <img
                src={product.image}
                alt="imageproduct"
                className={classes.img}
              />
            </Img>
          </ContainerImg>

          <DetailContainer>
            <Title>{product.title} </Title>
            <Price>$ {product.price} </Price>
            <Description>{product.description}</Description>

            <ItemCount finishing={onAdd}></ItemCount>
            <BtnHidden>
              <button
                className={classes.oculto}
                hidden={!show.hidden}
                id="button-finishing"
                variant="outlined"
              >
                <SwipeableTemporaryDrawer></SwipeableTemporaryDrawer>
              </button>
            </BtnHidden>
          </DetailContainer>
        </Container>
      </Animated>
    </>
  );
}

const Container = styled.div`
  display: flex;
  background-color: whitesmoke;
  flex-direction: row;
  padding: 30px;
`;

const ContainerImg = styled.div`
  display: flex;
  width: 50%;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
const Title = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  padding-left: 20px;
  font-weight: bold;
  font-size: 1.3rem;
`;
const Price = styled.div`
  display: flex;
  height: 20%;
  align-items: center;
  padding-left: 20px;
  font-weight: 400;
  font-size: 1.3rem;
`;
const Description = styled.div`
  display: flex;
  height: 30%;
  align-items: center;
  padding-left: 20px;
  font-weight: 100;
  font-size: 0.9rem;
  text-align: justify;
  white-space: pre-wrap;
`;

const Img = styled.div`
  width: 100%;
`;

const BtnHidden = styled.div`
  display: flex;
  justify-content: center;
`;
