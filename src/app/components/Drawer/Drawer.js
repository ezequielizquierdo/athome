import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { CartContext } from "../../Context/CartContext";
import Cart from "../Cart/Cart";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import { Animated } from "react-animated-css";
import { Table, TableBody } from "@material-ui/core";

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
    backgroundColor: "#8fbc8f",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#82ad82",
    },
  },
  buttonempty: {
    backgroundColor: "#a05252",
    color: "#ffffff",
  },
  total: {
    display: "flex",
    justifyContent: "flex-end",
  },
  drawer: {
    height: "783px",
    backgroundColor: "#f5f5f5",
    display: "flex",
    flexDirection: "column",
  },
  drawerheader: {
    display: "flex",
    height: "5vh",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    fontSize: "0.8rem",
    fontWeight: "700",
  },
  drawerFooter: {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  footeremptycart: {
    display: "flex",
  },
  drawerMain: {
    display: "flex",
    flexDirection: "column",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const { cart, totalPrice } = useContext(CartContext);
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
    <Animated animationIn="fadeIn">
      <div className={classes.drawer}>
        <div className={classes.drawerheader}>CARRITO</div>

        <Divider />

        <div className={classes.drawerContent}>
          <div className={classes.drawerMain}>
            <div className="Drawer_Container">
              <Table component="div">
                {cart.map((product) => (
                  <Cart key={product.id} productSale={product} />
                ))}
              </Table>
            </div>

            <DrawerSticky>
              {cart.length === 0 ? (
                <div className={classes.footeremptycart} id="footer-cart">
                  <th className="empty-cart" scope="row" colSpan="5">
                    <EmptyCart>
                      <h3>Creo que olvidaste agregar productos... </h3>
                      <div>
                        Tu carrito está vacio.{" "}
                        <Link to={`/products`}>Segui comprando.</Link>
                      </div>
                    </EmptyCart>
                  </th>
                </div>
              ) : (
                <div className={classes.drawerFooter}>
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
            </DrawerSticky>
          </div>
        </div>
      </div>
    </Animated>
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
  padding: 20px;
  font-size: 0.7rem;
`;

const DrawerSticky = styled.table`
  position: sticky;
  bottom: 0;
  background-color: #f5f5f5;
  display: "flex";
  justify-content: "center";
  padding: "10px";
`;
