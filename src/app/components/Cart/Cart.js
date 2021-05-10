import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { makeStyles, TableCell, TableRow } from "@material-ui/core";
import './Cart.css';
import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));


export default function Cart({ productSale }) {
    const classes = useStyles();
  const { updateToCart, handleRemove } = useContext(CartContext);

  function increaseQuantity() {
    const newItem = {
      id: productSale.id,
    //   category: productSale.category,
      title: productSale.title,
      description: productSale.description,
      price: productSale.price,
      image: productSale.image,
      cantidad: productSale.cantidad + 1,
    };
    console.log(newItem);
    updateToCart(newItem);
  }

  function reduceQuantity() {
    const newItem = {
      id: productSale.id,
    //   category: productSale.category,
      title: productSale.title,
      description: productSale.description,
      price: productSale.price,
      image: productSale.image,
      cantidad: productSale.cantidad - 1,
    };
    console.log(newItem);
    updateToCart(newItem);
  }

  return (
    <TableRow>
      <TableCell className="cart-image">
      <Img>
            <img
              src={productSale.image}
              alt="imageproduct"
              className={"cart-image"}
            />
          </Img>
      </TableCell>

      {/* <TableCell align="center">{productSale.category}</TableCell> */}
      <TableCell align="center">{productSale.title}</TableCell>
      <TableCell align="center">
        {productSale.cantidad < 5 ? (
          <button
            onClick={increaseQuantity}
            className="btn btn-info btn-sm action-button"
          >
            +
          </button>
        ) : (
          <button className="btn btn-info btn-sm action-button" disabled>
            +
          </button>
        )}
        <span className="cart-visual">{productSale.cantidad}</span>
        {productSale.cantidad > 1 ? (
          <button
            onClick={reduceQuantity}
            className="btn btn-danger btn-sm action-button"
          >
            -
          </button>
        ) : (
          <button className="btn btn-danger btn-sm action-button" disabled>
            -
          </button>
        )}
      </TableCell>

      <TableCell align="center">
      <IconButton onClick={() => handleRemove(productSale.id)} aria-label="delete" className={classes.margin}>
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