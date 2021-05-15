import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  font-family: 'Fira Sans', sans-serif;
  background: ${(props) => props.theme.background};
  scroll-behavior: smooth;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyle;
