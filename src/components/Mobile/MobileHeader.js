import { Box, IconButton, styled, Toolbar, Typography } from "@material-ui/core";
import Link from "react-scroll/modules/components/Link";
import { useState } from "react";
import { Grow, HeaderBar, HeaderButton, MyAppBar } from "../shared/HeaderComponents";
import { Menu } from '@material-ui/icons';

function MobileHeader() {
    const [visible, setVisible] = useState(false);

    return (
        <MyAppBar position="fixed">
            <HeaderBar>
                <MyToolbar>
                    <Link to="Home" spy={true} smooth={true}>
                        <Typography variant="h6" color="textPrimary">JJI's Portfolio</Typography>
                    </Link>
                    <Grow />
                    <IconButton onClick={() => { setVisible(!visible) }}>
                        <Menu />
                    </IconButton>
                </MyToolbar>
                {visible ?
                    <Box>
                        <Link to="About me" spy={true} smooth={true}>
                            <HeaderButton>About me</HeaderButton>
                        </Link>
                        <Link to="Skills" spy={true} smooth={true}>
                            <HeaderButton>Skills</HeaderButton>
                        </Link>
                        <Link to="Archiving" spy={true} smooth={true}>
                            <HeaderButton>Archiving</HeaderButton>
                        </Link>
                        <Link to="Projects" spy={true} smooth={true}>
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