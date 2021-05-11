import React, { useContext } from "react";
import "./CartPageContainer.css";
import { Link } from "react-router-dom";
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
            variant="contained"
            color="default"
            className={classes.button}
          >
            <Link to={`/products`} className="link-text">
              Continuar comprando
            </Link>
          </Button>

          <div>
            <Button
              variant="contained"
              size="medium"
              color="primary"
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
  flex-direction: column;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  background-color:whitesmoke;
`;
