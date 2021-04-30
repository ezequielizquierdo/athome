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
  background-color: whitesmoke;
  height:20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: italic;
`;

const MessageContainer = styled.div`
`