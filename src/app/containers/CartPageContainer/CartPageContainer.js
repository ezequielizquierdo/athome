import React, { useContext } from "react";
import "./CartPageContainer.css";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartList from "../../components/CartList/CartList";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import OrderConfirmation from "../../components/OrderConfirmation/OrdenConfirmation";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  containerconfirmation: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"#f5f5f5",
  },
  buyerinfo:{
    display:"flex",
    padding: "20px",
    justifyContent: "center",
    height: "46vh"
  },
  cartcontainer:{
    padding:"20px",
    width: "60%"
  }
}));

export default function CartPageContainer() {
  const classes = useStyles();
  const { cart, setCart } = useContext(CartContext);
  let history = useHistory();

  console.log(cart); //para test

  function handleRemove(id) {
    const newcart = cart.filter((product) => product.id !== id);
    setCart(newcart);
  }

  return (
    <div>
      <CategoryTitle>CONFIRMACION DE COMPRA</CategoryTitle>

      <div className={classes.containerconfirmation}>
        <div className={classes.buyerinfo}>
          <OrderConfirmation />
        </div>

        <div className={classes.cartcontainer} >
          <div>
            <CartList list={cart} onRemove={handleRemove} />
          </div>
        </div>
        
      </div>

      <ButtonContainer>
        <Button
          color="#000000"
          className={classes.button}
          onClick={() => history.push(`/products`)}
        >
          Continuar comprando
        </Button>
      </ButtonContainer>
    </div>
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

const ButtonContainer = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: whitesmoke;
  justify-content: flex-end;
`;
