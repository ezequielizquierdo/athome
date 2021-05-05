import { useHistory, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core";
import ItemCount from "../ItemCount/ItemCount";

// import { makeStyles } from "@material-ui/core/styles";

const { getProductById } = require("../../../Services/post_services");

const useStyles = makeStyles({
  img: {
    width: "100%",
  },
});

export default function ItemDetail() {
  const classes = useStyles();
  const { id } = useParams();
  const [show, setShow] = useState(true);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });
  const history = useHistory();


  function onAdd (){
    setShow({
      hidden: true
    });
  }


  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
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
        <button hidden={!show.hidden} id="button-finishing" type="button" className="btn btn-warning" onClick={() => history.push(`/cart`)}>Terminar mi compra</button>
        
        </DetailContainer>


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
  font-size: 1rem;
  text-align:justify;
  white-space: pre-wrap
`;
const Img = styled.div`
  width: 100%;
`;
