import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([]);

export default function AppContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  function isInCart(id) {
    return cart.some((product) => product.id === id);
  }

  function addToCart({ id, category, title, price, cantidad, image }) {
    const isCurrentInCart = isInCart(id);
    if (isCurrentInCart) {
      const newCart = cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            cantidad: cantidad + product.cantidad,
          };
        }
        return product;
      });
      return setCart([...newCart]);
    }
    setCart([...cart, { id, category, title, price, cantidad, image }]);
  }

  function updateToCart({ id, category, title, price, cantidad, image }) {
    const isCurrentInCart = isInCart(id);
    if (isCurrentInCart) {
      const newCart = cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            cantidad: cantidad,
          };
        }
        return product;
      });
      return setCart([...newCart]);
    }
    setCart([...cart, { id, category, title, price, cantidad, image }]);
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    const Total = () => {
      let totalPrice = 0;
      let totalItems = 0;
      for (const Item of cart) {
        totalPrice = totalPrice + Item.price * Item.cantidad;
        totalItems += Item.cantidad;
      }
      setTotalItems(totalItems);
      setTotalPrice(totalPrice.toFixed(2));
    };
    Total();
  }, [cart]);

  function handleRemove(id) {
    const newcart = cart.filter((product) => product.id !== id);
    setCart(newcart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        clearCart,
        updateToCart,
        handleRemove,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
