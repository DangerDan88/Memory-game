import React from "react";
import styled from "styled-components";

const HeaderStyles = styled.nav`
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
    padding: 10px 15px;
    max-width: 1000px;
  }
`;

export default function Header() {
  return (
    <div>
      <HeaderStyles>
        <ul>
          <li>Home</li>
          <li>Score:</li>
          <li>HighScores</li>
        </ul>
      </HeaderStyles>
    </div>
  );
}
