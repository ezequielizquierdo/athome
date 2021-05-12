import React, { useContext } from "react";
import "./CartPageContainer.css";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartList from "../../components/CartList/CartList";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
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
      <CategoryTitle>CARRITO DE COMPRAS</CategoryTitle>

      <div>
        <CartList list={cart} onRemove={handleRemove} />
      </div>
      <div>
        <ButtonContainer>
          <Button
            color="#000000"
            className={classes.button}
            onClick={() => history.push(`/products`)}
          >
              Continuar comprando
          </Button>

          <div>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              backgroundColor="#20b2aa"
              className={classes.margin}
            >
              Finalizar compra
            </Button>
          </div>
        </ButtonContainer>
      </div>
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
  background-color:whitesmoke;
  justify-content:flex-end;
`;
