import { Button, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ItemCount.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));



export default function ItemCount({ finishing }) {
  const [count, setCount] = useState(0);
  const classes = useStyles();

  useEffect(
    function () {
      console.log("Cambió el count");
    },
    [count]
  );

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    setCount(count - 1);
  }

  function addtoCart() {
    finishing(count);
  }

  return (
    <div className="counter">

      <div className="counter-body">
        {count > 0 ? (
          <Button onClick={decrementCount} className="button-counter">
            -
          </Button>
        ) : (
          <Button onClick={decrementCount} className="button-counter" disabled>
            -
          </Button>
        )}
        <p className="visual align-self-center">{count}</p>
        {count < 8 ? (
          <Button onClick={incrementCount} className="button-counter">
            +
          </Button>
        ) : (
          <Button onClick={incrementCount} className="button-counter" disabled>
            +
          </Button>
        )}
      </div>
      
      <div className="card-body text-center">
        {count > 0 ? (
          <Button onClick={addtoCart} className={classes.button} variant="contained" color="default">
            Agregar al carrito
          </Button>
        ) : (
          <Button onClick={addtoCart} className={classes.button} variant="contained" color="secondary" disabled>
            Agregar al carrito
          </Button>
        )}
      </div>
    </div>
  );
}
