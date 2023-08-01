"use client"
import { ThemeProvider } from "styled-components";
import  { useLocalStorage } from "usehooks-ts";
import { GlobalStyle } from "../themes/GlobalStyles";
import { defaultTheme } from "../themes/defaultTheme";


export default function GlobalThemeWrapper({children}){

    const [theme] = useLocalStorage("theme", defaultTheme);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}