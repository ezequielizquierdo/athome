import React from "react";
import styled from "styled-components";

export default function TextInCover() {
  return (
    <CoverShadow>
      <CoverTitle>ACOMODATE.</CoverTitle>
    </CoverShadow>
  );
}

const CoverTitle = styled.h1`
  display: flex;
  align-items: center;
  color: white;
  font-family: sans-serif;
  font-weight: lighter;

`;

const CoverShadow = styled.div`
    background-image: linear-gradient(to top, rgba(4, 4, 4, 0.65), rgba(54, 54, 54, 0.2));
    height: 100%;
    display: flex;
    justify-content: center;
`
