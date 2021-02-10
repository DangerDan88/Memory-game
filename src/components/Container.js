import React, { useState } from "react";
import styled from "styled-components";

const ContainerStyles = styled.div`
  h1 {
    color: var(--main);
  }
`;

export default function Container() {
  const [score, setScore] = useState(0);

  return (
    <ContainerStyles>
      <h1>Memory Game</h1>
    </ContainerStyles>
  );
}
