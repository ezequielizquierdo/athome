import React, { useState, useEffect } from "react";
import "./ItemCount.css";
import Visualizer from "./Visualizer";
import Counter from "../Counter/Counter";

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
      <Visualizer count={count} />
      <div>{count < 3 ? "Stock disponible" : "Ya no hay suficiente stock"}</div>
      <Counter increment={incrementCount} decrement={decrementCount} />
    </div>
  );
}
