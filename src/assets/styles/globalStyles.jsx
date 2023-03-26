import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NeoDunggeunmo';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
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
    textarea{
    background-color:transparent;
    border: 0;
    color: white;
    font-size: x-large;
    font-family: 'NeoDunggeunmo';
    font-family:  'NeoDunggeunmo';
    width: 100%;
    margin-bottom: 25px;
    overflow:hidden;
    resize: none;
    }
`;
export default GlobalStyle;
