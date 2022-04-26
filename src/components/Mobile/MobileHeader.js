import { Box, IconButton, styled, Toolbar } from "@material-ui/core";
import Link from "react-scroll/modules/components/Link";
import { useState } from "react";
import { Grow, HeaderBar, HeaderButton, HomeMenu, MyAppBar } from "../shared/HeaderComponents";
import { Menu } from '@material-ui/icons';

function MobileHeader() {
    const [visible, setVisible] = useState(false);

    return (
        <MyAppBar position="fixed">
            <HeaderBar>
                <MyToolbar>
                    <Link to="Home" spy={true} smooth={true} onClick={() => { setVisible(false) }}>
                        <HomeMenu variant="h6" color="textPrimary">JJI's Portfolio</HomeMenu>
                    </Link>
                    <Grow />
                    <IconButton onClick={() => { setVisible(!visible) }}>
                        <Menu />
                    </IconButton>
                </MyToolbar>
                {visible ?
                    <Box>
                        <Link to="About me" spy={true} smooth={true} onClick={() => { setVisible(false) }}>
                            <HeaderButton>About me</HeaderButton>
                        </Link>
                        <Link to="Skills" spy={true} smooth={true} onClick={() => { setVisible(false) }}>
                            <HeaderButton>Skills</HeaderButton>
                        </Link>
                        <Link to="Archiving" spy={true} smooth={true} onClick={() => { setVisible(false) }}>
                            <HeaderButton>Archiving</HeaderButton>
                        </Link>
                        <Link to="Projects" spy={true} smooth={true} onClick={() => { setVisible(false) }}>
                            <HeaderButton>Projects</HeaderButton>
                        </Link>
                    </Box> :
                    null
                }
            </HeaderBar>
        </MyAppBar>
    )
};

export default MobileHeader;

const MyToolbar = styled(Toolbar)({
    height: '64px',
})