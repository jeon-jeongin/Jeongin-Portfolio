import { createTheme } from "@material-ui/core";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
    }
    body{
        font-size: 14px;
        font-family:'Montserrat',sans-serif;
        color: '#336362e';
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