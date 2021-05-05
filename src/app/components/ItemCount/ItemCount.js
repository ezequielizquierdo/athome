import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./ItemCount.css";

export default function ItemCount({ finishing }) {
  const [count, setCount] = useState(0);

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
          <Button onClick={addtoCart} className="btn btn-success">
            Agregar al carrito
          </Button>
        ) : (
          <Button onClick={addtoCart} className="btn btn-success" disabled>
            Agregar al carrito
          </Button>
        )}
      </div>
    </div>
  );
}
