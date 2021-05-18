import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import { Button, Paper, TableHead, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";


const { createOrder } = require("../../../Services/post_services");

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    //   width: "80%",
      display: "flex",
    },
    orderform:{
        backgroundColor:"#000000"
    },
    paperformat:{
        padding:"20"
    }
  },
}));

export default function OrderConfirmation() {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const classes = useStyles();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [orderId, setOrderId] = useState("");

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);
  }

  function placeOrder(event) {
    event.preventDefault();
    const buyer = {
      name: name,
      email: email,
      phone: phone,
    };
    createOrder(buyer, cart, totalPrice).then((id) => setOrderId(id));
  }

  let history = useHistory();
  function closeAndReset() {
    clearCart();
    history.push(`/`);
  }

  return (
    <Paper>
      <PaperFormat>
        <form className={classes.orderform}>
          <p className="form-title">Datos personales:</p>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              onChange={handleNameChange}
              type="text"
              required
              variant="outlined"
              label="Nombre y Apellido"
            />
            <TextField
              id="outlined-basic"
              onChange={handleEmailChange}
              type="email"
              required
              variant="outlined"
              label="email"
            />
            <TextField
              id="outlined-basic"
              onChange={handlePhoneChange}
              type="number"
              required
              variant="outlined"
              label="Teléfono"
            />
          </form>

          {cart.length !== 0 && (
            <div>
              <div className="d-flex flex-row-reverse">
                <Button
                  onClick={placeOrder}
                  type="submit"
                  className="btn btn-primary mt-3 mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  variant="contained"
                  size="medium"
                  color="primary"
                  backgroundColor="#20b2aa"
                  aria-expanded="false"
                  aria-controls="collapseForm"
                >
                  Finalizar compra
                </Button>
              </div>
            </div>
          )}
        </form>

        {/* <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex flex-column justify-content-center align-items-center">
                            <img src={check} className="mt-3 mb-3" width="150" height="150" alt="check"/>
                            <p className="check-text">Su pedido ha sido confirmado!</p>
                            <p className="check-contact">Código de confirmación: {orderId}</p>
                            <p className="check-contact">En breve estaremos en contacto para coordinar la entrega y el pago.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeAndReset}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div> */}
      </PaperFormat>
    </Paper>
  );
}

const PaperFormat = styled.div`
padding:20px;
width:31vw;

`
