import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";


const { getProductById } = require('../../../Services/post_services')



// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

//   function onHandleClick(product){
//     setTitle(product.title);
//     setPrice(product.price);
//     setId(product.id);
//     setDescription(product.description);
//     setCategory(product.category);
//     setImage(product.image);

//     history.push(`/Escritorios/${product.id}`)
//   }

export default function ItemDetail() {
//   const classes = useStyles();
  const { id } = useParams();
  const [product, setProduct] = useState({ title: "", price: "" });

  useEffect(() => {
    getProductById(id)
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h1>Titulo {product.title} </h1>
      <h3>Precio:{product.price} </h3>
    </div>
  );
}

// const Li = styled.div`
//   display: flex;
//   width: 40vw;
// `;
