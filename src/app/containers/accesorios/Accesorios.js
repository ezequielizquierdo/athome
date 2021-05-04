import React, { useEffect, useState } from "react";
import List from "../../components/ItemList/ItemList";

export default function Accesorios() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setTimeout(
      () =>
        fetch(
          "http://my-json-server.typicode.com/ezequielizquierdo/mockjson/products?category=accesorios"
        )
          .then((response) => response.json())
          .then((data) => setProducts(data))
          .catch((err) => console.log(err)),
      500
    );
  }, []);
  return (
    <div className="list_container">
      <List listProp={products} />
    </div>
  );
}