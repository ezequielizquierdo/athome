import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import Visualizer from './Visualizer';


export default function ItemCount() {
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

  return (
    <div className="counter">
      <button onClick={incrementCount}>Incrementar</button>
      
      
      <div>
        <Visualizer number={count} />
        {count < 3 ? (<ItemCount increment={incrementCount} decrement={decrementCount} />) : null}
      </div>

      <button onClick={decrementCount}>Decrementar</button>
    </div>
  );
}