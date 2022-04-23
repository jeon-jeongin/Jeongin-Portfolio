import { AppBar, Toolbar, Typography, Button, IconButton, styled, Box } from "@material-ui/core";
import Link from "react-scroll/modules/components/Link";
import styledComponents from "styled-components";
import { useViewport } from "../utils/ViewportProvider";
import { Menu } from '@material-ui/icons';
import { useState } from "react";

const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 620;

    const MobileComponent = () => {
        const [visible, setVisible] = useState(false);

        return (
            <AppBar position="fixed">
                <HeaderBar>
                    <Toolbar>
                        <Typography variant="h6">JJI's Portfolio</Typography>
                        <Grow />
                        <IconButton color="inherit" onClick={() => { setVisible(!visible) }}>
                            <Menu />
                        </IconButton>
                    </Toolbar>
                    {visible ?
                        <Box>
                            <Link to="About me" spy={true} smooth={true}>
                                <HeaderButton color="inherit">About me</HeaderButton>
                            </Link>
                            <Link to="Skills" spy={true} smooth={true}>
                                <HeaderButton color="inherit">Skills</HeaderButton>
                            </Link>
                            <Link to="Archiving" spy={true} smooth={true}>
                                <HeaderButton color="inherit">Archiving</HeaderButton>
                            </Link>
                            <Link to="Projects" spy={true} smooth={true}>
                                <HeaderButton color="inherit">Projects</HeaderButton>
                            </Link>
                        </Box> :
                        null
                    }
                </HeaderBar>
            </AppBar>
        )
    }


    const DesktopComponent = () => {
        return (
            <AppBar position="fixed">
                <HeaderBar>
                    <Toolbar>
                        <Typography variant="h6">JJI's Portfolio</Typography>
                        <Grow />
                        <Link to="About me" spy={true} smooth={true}>
                            <Button color="inherit">About me</Button>
                        </Link>
                        <Link to="Skills" spy={true} smooth={true}>
                            <Button color="inherit">Skills</Button>
                        </Link>
                        <Link to="Archiving" spy={true} smooth={true}>
                            <Button color="inherit">Archiving</Button>
                        </Link>
                        <Link to="Projects" spy={true} smooth={true}>
                            <Button color="inherit">Projects</Button>
                        </Link>
                    </Toolbar>
                </HeaderBar>
            </AppBar>
        )
    }

    return width < breakpoint ? <MobileComponent /> : <DesktopComponent />
};

function Header() {
    return (
        <MyComponent />
    )
}

export default Header;

const HeaderBar = styledComponents.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1048px;
`
const Grow = styledComponents.div`
    flex-grow: 1;
`
const HeaderButton = styled(Button)({
    width: '100%',
    justifyContent: 'left',
    padding: '10px 16px'
})