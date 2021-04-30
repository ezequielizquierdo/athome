import React from "react";
import styled from "styled-components";

export default function MessageInNavbar() {
  return (
    <div>
      <MessageInNavBar>NUEVO STOCK DISPONIBLE EN STORE</MessageInNavBar>
    </div>
  );
}

const MessageInNavBar = styled.div`
  background-color: lightcoral;
  color: white;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.5px;
  font-size: 0.6rem;
  align-items: center;
`;
