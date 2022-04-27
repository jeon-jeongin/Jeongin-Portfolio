import { createTheme } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-size: 16px;
        font-family:'Montserrat',sans-serif;
        color: '#336362e';
    }
    a{
        text-decoration: none;
    }
`;

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
});