import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { CartContext } from "../../Context/CartContext";
import Cart from "../Cart/Cart";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  hiddenCart: {
    color: "#ffffff",
  },
  confirmationbutton: {
    backgroundColor: "#81c784",
    color: "#ffffff",
  },
  buttonempty: {
    backgroundColor: "#a05252",
    color: "#ffffff",
  },
  total: {
    display: "flex",
    justifyContent: "flex-end",
  },
  Drawer: {
    height: "783px",
  },
  drawerheader: {
    display: "flex",
    height: "5vh",
    justifyContent: "center",
    alignItems: "center",
  },
  Drawer_Footer: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  console.log(cart); //para test
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={classes.Drawer}>
      <div className={classes.drawerheader}>CARRITO</div>

      <Divider />

      <div className="Drawer_Content">
        <div className="Drawer_Main">
          <div className="Drawer_Container">
            {cart.map((product) => (
              <Cart key={product.id} productSale={product} />
            ))}
          </div>

          <div>
            {cart.length === 0 ? (
              <tr id="footer-carrito">
                <th className="empty-cart" scope="row" colSpan="5">
                  <EmptyCart>
                    <h3>Creo que olvidaste agregar productos... </h3>
                    <div>
                      Tu carrito está vacio.{" "}
                      <Link to={`/products`}>Segui comprando.</Link>
                    </div>
                  </EmptyCart>
                </th>
              </tr>
            ) : (
              <div className={classes.Drawer_Footer}>
                <div>
                  <Link to={`/cart`}>
                    <Button
                      variant="contained"
                      className={classes.confirmationbutton}
                      endIcon={
                        <AssignmentTurnedInIcon></AssignmentTurnedInIcon>
                      }
                    >
                      Confirmar compra - $ <span>{totalPrice}</span>
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className={classes.hiddenCart}
          >
            Ver Carrito
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
  gap: 0.8rem;
`;
