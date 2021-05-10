import React, { useContext } from "react";
import "./CartPageContainer.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartList from "../../components/CartList/CartList";
import styled from "styled-components";

export default function CartPageContainer() {
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
        <button type="button" className="btn btn-warning">
          <Link to={`/products`} className="link-text">
            Continuar comprando
          </Link>
        </button>
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
