import { createGlobalStyle } from "styled-components";

// import reset from "styled-reset"; // reset은 npm i styled-reset , yarn add styled-reset 설치 필요

const GlobalStyle = createGlobalStyle`
    /* $ {reset} */

    /* 외부 서체 링크 */
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700&display=swap'); 

    body, input, button{
        font-family: 'Nanum Myeongjo', '바탕체', serif;
        font-size: 18px;
        line-height: 1.5;
    }
    body * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
    }

`;

export default GlobalStyle;

// export default createGlobalStyle`` 직접 내보내기
