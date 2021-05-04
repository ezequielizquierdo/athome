import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button"; 
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Item({product, handleClick}) {
  const classes = useStyles();

   return (
     <Li> 
       <Card onClick={() => handleClick(product)} className={classes.root}>
         <CardActionArea>
           <CardMedia className={classes.media}>
             <img alt='imagen_producto' src={product.image}></img>
           </CardMedia>
   
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               {product.title} 
             </Typography>
   
             <Typography variant="body2" color="textSecondary" component="p">
               $ {product.price}
             </Typography>
           </CardContent>
         </CardActionArea>
   
         <CardActions>
           
           <Button size="small" color="primary">
             Learn More
           </Button>
         </CardActions>
       </Card>
     </Li>
   
   )
   }

  


const Li = styled.div `
  display: flex;
  width: 40vw;
`