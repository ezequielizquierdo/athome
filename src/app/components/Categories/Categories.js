import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { getProductByCategory } from '../../../Services/post_services';
import ItemList from '../ItemList/ItemList';

export default function Categories() {
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    
    const history = useHistory();

    function onHandleClick(product) {
      history.push(`/products/${product.id}`);
    }
  
    useEffect(() => {
        getProductByCategory(category)
        .then((products) => setProducts(products))
    }, [category]);
  return (
    <div className="list_container">
        <ItemList handleClick={onHandleClick} listProp={products} />
      </div>
  );
}
