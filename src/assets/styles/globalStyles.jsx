import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: NeoDunggeunmo;
        src: local("NeoDunggeunmo"),
        url('//cdn.jsdelivr.net/gh/neodgm/neodgm-webfont@1.530/neodgm/style.css');
    }
    *{
        box-sizing: border-box;
    }
    body {
    margin: 0;
    font-family: 'NeoDunggeunmo',-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #05037B;
        color: white;
    }
    button, a, li,input{
    all: unset;
    }
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;
export default GlobalStyle;
