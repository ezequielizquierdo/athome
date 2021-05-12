import React from "react";
import styled from "styled-components";

export default function MessageAtCenter() {
  return (
    <MessageContainer >
      <Message>take time to be comfortable.</Message>
    </MessageContainer>
  );
}

const Message = styled.div`
  background-color: #efaeae;
  height:30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
  font-family: Dancing Script, cursive;
  color: white;
    font-size: 1.5rem;
`;

const MessageContainer = styled.div`
`