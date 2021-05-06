import React from "react";
import "./Comingsoon.css";
import styled from "styled-components";


export default function Comingsoon() {
  return (
    <div>
      <div className="cover-comingsoon">
        
        <CoverShadow>
          <Title>Muy pronto</Title>
          <SubTitle>nuevos productos para vos!</SubTitle>
        </CoverShadow>
      </div>
    </div>
  );
}

const Title = styled.h1`
  display: flex;
  align-items: center;
  color: white;
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

`;