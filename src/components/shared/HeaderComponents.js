import { AppBar, styled, Toolbar, Button } from "@material-ui/core";
import styledComponents from "styled-components";

export const MyAppBar = styled(AppBar)({
    backgroundColor: '#ffffff'
});

export const HeaderBar = styledComponents.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1280px;
`
export const Grow = styledComponents.div`
    flex-grow: 1;
`
export const HeaderButton = styled(Button)({
    width: '100%',
    justifyContent: 'left',
    padding: '10px 16px'
})

export const MyToolbar = styled(Toolbar)({
    height: '64px',
})