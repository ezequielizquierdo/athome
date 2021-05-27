import React from "react";
import styled from "styled-components";
import {Animated} from "react-animated-css";

export default function TextInCover() {
  return (
    <CoverShadow >

      <Animated 
      animationIn="fadeInUp"
      style={{
        justifyContent: "center",
        display:"flex",
        flexDirection: "column"
      }}
      >
        <Title>RELAX</Title>
        <SubTitle>Work comfortably</SubTitle>
        
        </Animated>
    </CoverShadow>
  );
}


const Title = styled.h1`
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;

  /* font-family: Dancing Script, cursive; */

`;

const CoverShadow = styled.div`
    background-image: linear-gradient(to top, rgba(4, 4, 4, 0.65), rgba(54, 54, 54, 0.2));
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-weight: 900;

`

const SubTitle = styled.h3`
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  font-weight: 100;
  font-size:.9rem;

  /* font-family: Dancing Script, cursive; */

`;