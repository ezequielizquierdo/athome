import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import { CartContext } from "../../Context/CartContext";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    padding: "20px",
  },
  container: {
    padding: 20,
  },
  alignRight: {
    textAlign: "center",
  },
  root: {
    textAlign: "center",
    height: "10vh",
  },
  buttonDel: {
    backgroundColor: "#E05070",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#d04a68",
    },
  },
});

export default function CartList() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <div className={classes.container}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Vista Previa</TableCell>
                <TableCell align="center">Titulo</TableCell>
                <TableCell align="center">Cantidad</TableCell>
                <TableCell align="center">Eliminar</TableCell>
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {cart.map((product) => (
                <Cart key={product.id} productSale={product} />
              ))}
            </TableBody>

            <tfoot>
              {cart.length === 0 ? (
                <tr id="footer-cart">
                  <th className="empty-cart" scope="row" colSpan="5">
                    <EmptyCart>
                      <h3>Creo que olvidaste agregar productos... </h3>
                      <div>
                        Tu carrito está vacio.
                        <Link to={`/products`}>Segui comprando.</Link>
                      </div>
                    </EmptyCart>
                  </th>
                </tr>
              ) : (
                <tr className={classes.root}>
                  <td></td>
                  <td></td>
                  <td align="center">
                    <Button
                      variant="contained"
                      id="vaciar-carrito"
                      onClick={clearCart}
                      className={classes.buttonDel}
                      startIcon={<DeleteIcon />}
                    >
                      Vaciar Carrito
                    </Button>
                  </td>

                  <td align="center">Total</td>

                  <td align="center">
                    $ <span>{totalPrice}</span>
                  </td>
                </tr>
              )}
            </tfoot>
          </Table>
        </div>
      </TableContainer>
    </>
  );
}

const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
  gap: 0.8rem;
`;
