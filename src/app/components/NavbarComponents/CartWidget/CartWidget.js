import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./CartWidget.css";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  full: {
    color: "#000000",
  },
  empty: {
    color: "#d3d3d3",
  },
});

export default function CartWidget() {
  const classes = useStyles();
  const { cart, totalItems } = useContext(CartContext);

  return (
    <div className="cart_icon_container">
      {cart.length === 0 ? (
        <Link to={`/cart`}>
          <ShoppingCartIcon
            className={classes.empty}
            alt="Cart"
            loading="lazy"
          />
        </Link>
      ) : (
        <Link to={`/cart`}>
          <ShoppingCartIcon
            className={classes.full}
            alt="Cart"
            loading="lazy"
          />
          {totalItems ? (
            <span className="total-items">{totalItems}</span>
          ) : null}
        </Link>
      )}
    </div>
  );
}
