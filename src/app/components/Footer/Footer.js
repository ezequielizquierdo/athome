import React from "react";
import styled from "styled-components";

export default function Footer() {

  return (
    <div>
      <TextInFooter>Copiright 2021 - Proyecto atHome - ReactJS</TextInFooter>
    </div>
  );
}

const TextInFooter = styled.div`
  background-color: grey;
  color: white;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
`;

