import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({theme}) => theme.body};
        color: ${({theme}) => theme.text};
    }
`

export const lightTheme = {
    body: '#f1f1f1',
    text: '#121620'
};

export const darkTheme = {
    body: '#121620',
    text: '#f1f1f1'
};
