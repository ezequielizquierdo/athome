import React from "react";
import styled from "styled-components";

export default function TextInCover() {
  return (
    <CoverShadow>
      <Title>Relax</Title>
      <SubTitle>Work Comfortably</SubTitle>
    </CoverShadow>
  );
}


const Title = styled.h1`
  display: flex;
  align-items: center;
  color: white;
  font-family: Dancing Script, cursive;

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
  font-family: Dancing Script, cursive;

`;