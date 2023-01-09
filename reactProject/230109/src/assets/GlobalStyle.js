import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
${reset}

@import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap');

body{
  font-family:'Nanum Myeongjo', serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
}
`;

export default GlobalStyle;
