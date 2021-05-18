import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  root: {
    width: '30vw',
    textAlign: 'center'
  },
  media: {
    height: '60vh',
    display: 'flex',

  },
});

export default function Item({ product, handleClick }) {
  const classes = useStyles();


  return ( 
    <Li>
      <Card onClick={() => handleClick(product)} className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}>
            <ImgContainer style={{backgroundImage: `url(${product.image})`}}>
            </ImgContainer>
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

        
      </Card>
    </Li>
  );
}

const Li = styled.div`
  display: flex;
  width:30%;
`

const ImgContainer = styled.div`
    display: flex;
    background-size: cover;
    width: 100%;
    background-repeat: no-repeat;
`
