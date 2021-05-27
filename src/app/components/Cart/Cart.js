import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import "./Cart.css";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Counter from "../Counter/Counter";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function Cart({ productSale }) {
  const classes = useStyles();
  const { updateToCart, handleRemove, cart } = useContext(CartContext);
  let count =
    cart.find((cartItem) => cartItem.id === productSale.id)?.cantidad || 0;

  function increaseQuantity() {
    const newItem = {
      id: productSale.id,
      title: productSale.title,
      description: productSale.description,
      price: productSale.price,
      image: productSale.image,
      cantidad: productSale.cantidad + 1,
    };
    updateToCart(newItem);
  }

  function reduceQuantity() {
    const newItem = {
      id: productSale.id,
      title: productSale.title,
      description: productSale.description,
      price: productSale.price,
      image: productSale.image,
      cantidad: productSale.cantidad - 1,
    };
    updateToCart(newItem);
  }

  return (
    <TableRow component="div">
      <TableCell className="cart-image">
        <Img>
          <img
            src={productSale.image}
            alt="imageproduct"
            className={"cart-image"}
          />
        </Img>
      </TableCell>

      <TableCell align="center">{productSale.title}</TableCell>

      <TableCell className={classes.counterbody} align="center">
        <Counter
          count={count}
          incrementCount={increaseQuantity}
          decrementCount={reduceQuantity}
        ></Counter>
      </TableCell>

      <TableCell align="center">
        <IconButton
          onClick={() => handleRemove(productSale.id)}
          aria-label="delete"
          className={classes.margin}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>

      <TableCell align="center">
        $ <span>{(productSale.price * productSale.cantidad).toFixed(2)}</span>
      </TableCell>
    </TableRow>
  );
}

const Img = styled.div`
  width: 100%;
`;
