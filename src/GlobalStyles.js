import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
root: {
    --main: #77b300;
    --black: #161515;
    --white: #fff;
}

p {
    font-weight: 500;
    font-size: 17px;
    line-height: 27px;
    text-align: center;
  }
h1 {    
    text-align: center;
    }
`;

export default GlobalStyles;
