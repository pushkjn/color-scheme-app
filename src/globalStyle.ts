import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        box-sizing: border-box;
        margin: 0;
    }
    body {
        background-color: rgb(201, 201, 201);
        min-height: 100vh;
    }
    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`