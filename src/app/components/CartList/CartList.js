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
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  container: {
    padding: 20,
    backgroundColor:"#f5f5f5",
  },
  alignRight: {
    textAlign: "center",
  },
  root: {
    textAlign: "center",
  },
});


export default function CartList({ list }) {
  const classes = useStyles();

  const { cart, clearCart, totalPrice } = useContext(CartContext);
  //   console.log(cart); //para test
  // console.log(cart[0].cantidad) //para test
  return (
    <>
      <TableContainer component={Paper}>
        <div className={classes.container}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Vista Previa</TableCell>
                {/* <TableCell align="right">Categoria</TableCell> */}
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

              <TableRow className={classes.root}>
                <td></td>

                <td></td>

                <TableCell align="center">
                <Button
                  variant="contained"
                  color="secondary"
                  id="vaciar-carrito"
                  onClick={clearCart}
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Vaciar Carrito
                </Button>
                </TableCell>

                <TableCell align="center">Total</TableCell>

                <TableCell align="center">
                  $ <span>{totalPrice}</span>
                </TableCell>
              </TableRow>
              <TableRow>
                <tfoot>
                  {list === undefined ? (
                    <div id="footer-carrito">
                      <th className="empty-cart" scope="row" colSpan="5">
                        Carrito vacío - comience a comprar!
                      </th>
                    </div>
                  ) : (
                    <div id="footer-carrito">
                      {/* <th></th>
                <td></td> */}
                    </div>
                  )}
                </tfoot>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </>
  );
}
