import React, { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import {
  createMuiTheme,
  Paper,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import SimpleModal from "../ModalConfirmation/ModalConfirmation";
import { grey } from "@material-ui/core/colors";
import ModalError from "../ModalError/ModalError";

const { createOrder } = require("../../../Services/post_services");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      display: "flex",
    },
    orderform: {
      backgroundColor: "#000000",
    },
    paperformat: {
      padding: "20",
    },
    buttonFinish: {
      backgroundColor: "#E05070",
      color: "#ffffff",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: grey,
  },
});

export default function OrderConfirmation() {
  const { cart, totalPrice } = useContext(CartContext);
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [orderId, setOrderId] = useState("");

  function placeOrder() {
    const buyer = {
      name: name,
      email: email,
      phone: phone,
    };
    createOrder(buyer, cart, totalPrice).then((id) => setOrderId(id));
  }

  return (
    <Paper>
      <PaperFormat>
        <div className={classes.orderform}>
          <p className="form-title">Datos personales</p>
          <ThemeProvider theme={theme}>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                onChange={(evt) => setName(evt.target.value)}
                // onChange={handleNameChange}
                type="text"
                required
                variant="outlined"
                label="Nombre y Apellido"
              />
              <TextField
                id="outlined-basic"
                onChange={(evt) => setEmail(evt.target.value)}
                // onChange={handleEmailChange}
                type="email"
                required
                variant="outlined"
                label="Email"
              />
              <TextField
                id="outlined-basic"
                onChange={(evt) => setPhone(evt.target.value)}
                // onChange={handlePhoneChange}
                required
                variant="outlined"
                label="Teléfono"
              ></TextField>
            </form>
          </ThemeProvider>

          {cart.length !== 0 && (
            <div>
              {!(name && email && phone) ? (
                <ModalError
                  onClick={placeOrder}
                  // disabled={!(name && email && phone)}
                  data-bs-toggle="modal"
                ></ModalError>
              ) : (
                <SimpleModal
                  onClick={placeOrder}
                  type="submit"
                  className="btn btn-primary mt-3 mb-3"
                  // disabled={!(name && email && phone)}
                  data-bs-toggle="modal"
                  orderId={orderId}
                ></SimpleModal>
              )}
            </div>
          )}
        </div>
      </PaperFormat>
    </Paper>
  );
}

const PaperFormat = styled.div`
  padding: 20px;
  width: 31vw;
`;
