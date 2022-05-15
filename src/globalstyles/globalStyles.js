// globalStyles.js
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    
    body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    /* background: red; */
    /* font-family: Open-Sans, Helvetica, Sans-Serif; */
    font-family: 'Raleway', sans-serif;
    }
    section{
        margin: 0 10%;
        height: 100vh;
    }
    @media only screen and (max-width: 713px) {
        section {
            margin: 0 5%;
            /* height: auto; */
        }
    } 
    :root {
        --color1: #ffffff; // text color
        --color2: #17202A ; // text color
        --color3: #fd746c ; //  Butthon
        --color4: #ECF0F1 ; // navBar bg color
        --color5: #3498DB ; // navBar bg color
    }
    h1{
        font-size: 1.8rem;
        @media screen and (max-width: 360px) {
            font-size: 1.2rem;
        }
    }

`;
 
export default GlobalStyle;