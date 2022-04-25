import { Toolbar } from "@material-ui/core";
import Link from "react-scroll/modules/components/Link";
import { Grow, HeaderBar, HeaderButton, HomeMenu, MyAppBar } from "../shared/HeaderComponents";

function DesktopHeader() {
    return (
        <MyAppBar position="fixed">
            <HeaderBar>
                <Toolbar>
                    <Link to="Home" spy={true} smooth={true} offset={0}>
                        <HomeMenu variant="h6" color="textPrimary">JJI's Portfolio</HomeMenu>
                    </Link>
                    <Grow />
                    <Link to="About me" spy={true} smooth={true} offset={0}>
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
                </Toolbar>
            </HeaderBar>
        </MyAppBar>
    )
};

export default DesktopHeader;