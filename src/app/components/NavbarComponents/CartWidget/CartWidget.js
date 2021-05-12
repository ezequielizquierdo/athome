import React, { useContext } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./CartWidget.css";
import { CartContext } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cart, totalItems } = useContext(CartContext);

  return (
    <div className="cart_icon_container">
      {cart.length === 0 ? (
        <Link to={`/cart`}>
          <ShoppingCartIcon className="cart-icon" alt="Cart" loading="lazy" />
        </Link>
      ) : (
        <Link to={`/cart`}>
          <ShoppingCartIcon className="cart-icon" alt="Cart" loading="lazy" />
          {totalItems ? (
            <span className="total-items">{totalItems}</span>
          ) : null}
        </Link>
      )}
    </div>
  );
}
