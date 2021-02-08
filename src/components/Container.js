import React from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  h1 {
    color: var(--main);
  }
`;

export default function Container() {
  return (
    <ContainerStyles>
      <h1>Memory Game</h1>
    </ContainerStyles>
  );
}
