import React, { useEffect, useState } from "react";
import List from "../../components/ItemList/ItemList";
import {useHistory} from 'react-router-dom'


export default function Escritorios() {
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState([]);
    const [price, setPrice] = useState([]);
    const [id, setId] = useState([]);
    const [description, setDescription] = useState([]);
    const [category, setCategory] = useState([]);
    const [image, setImage] = useState([]);

    const history = useHistory();

    function onHandleClick(product){
    setTitle(product.title);
    setPrice(product.price);
    setId(product.id);
    setDescription(product.description);
    setCategory(product.category);
    setImage(product.image);

    history.push(`/escritorios/${product.id}`)
  }
  
    useEffect(() => {
      setTimeout(() => 
      fetch("http://my-json-server.typicode.com/ezequielizquierdo/mockjson/products?category=escritorios")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch(err => console.log(err)), 500)
    }, []);
  return (
    <div className="list_container">
        <List handleClick={onHandleClick} listProp={products} />
      </div>
  );
}


  