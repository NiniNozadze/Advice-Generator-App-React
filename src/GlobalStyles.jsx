import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    font-family: 'Manrope', sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    background: var(--Dark-Blue, #202733);
    display: flex;
    justify-content: center;
    @media (min-width: 1440px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
}

`;
export default GlobalStyles;
