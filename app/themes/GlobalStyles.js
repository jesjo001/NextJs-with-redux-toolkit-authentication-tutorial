import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

export const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin: 0;
    box-sizing: border-box;
}

body {
    background-color: ${defaultTheme.bodyColor};
    color: ${defaultTheme.textColor};
    font-family: 'Mulish';
}
`;
