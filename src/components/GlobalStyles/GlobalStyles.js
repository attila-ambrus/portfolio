import React from "react";
import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:200,400,700');
    :root {
        --color-black: #232528;
    }
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }
    html {
        font-size: 50%;
        box-sizing: border-box;
    }
    body {
        font-family: "Montserrat", sans-serif;
        color: var(--color-black);
    }
`

const globalStyle = () => {
    return (
        <GlobalStyle />
    )
}

export default globalStyle;