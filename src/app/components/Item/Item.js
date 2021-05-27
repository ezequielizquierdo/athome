import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import styled from "styled-components";
import { Animated } from "react-animated-css";

const useStyles = makeStyles({
  root: {
    width: "30vw",
    textAlign: "center",
  },
  media: {
    height: "60vh",
    display: "flex",
  },
});

export default function Item({ product, handleClick }) {
  const classes = useStyles();

  return (
    <Li>
      <Card onClick={() => handleClick(product)} className={classes.root}>
        <CardActionArea>
          <Animated animationIn="fadeIn">
            <CardMedia className={classes.media}>
              <ImgContainer
                style={{ backgroundImage: `url(${product.image})` }}
              ></ImgContainer>
            </CardMedia>
          </Animated>

          <CardContent>
            <Title gutterBottom>{product.title}</Title>

            <SubTitle color="textSecondary" component="p">
              $ {product.price}
            </SubTitle>
          </CardContent>
        </CardActionArea>
      </Card>
    </Li>
  );
}

const Li = styled.div`
  display: flex;
  width: 30%;
`;

const ImgContainer = styled.div`
  display: flex;
  background-size: cover;
  width: 100%;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 0.8rem;
  font-weight: 100;
`;

const SubTitle = styled.div`
  font-size: 0.8rem;
  font-weight: 700;
`;
