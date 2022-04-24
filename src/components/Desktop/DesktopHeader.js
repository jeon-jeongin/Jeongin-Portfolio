import { Button, Toolbar, Typography } from "@material-ui/core";
import Link from "react-scroll/modules/components/Link";
import { Grow, HeaderBar, MyAppBar } from "../shared/HeaderComponents";

function DesktopHeader() {
    return (
        <MyAppBar position="fixed">
            <HeaderBar>
                <Toolbar>
                    <Link to="Home" spy={true} smooth={true}>
                        <Typography variant="h6" color="textPrimary">JJI's Portfolio</Typography>
                    </Link>
                    <Grow />
                    <Link to="About me" spy={true} smooth={true}>
                        <Button>About me</Button>
                    </Link>
                    <Link to="Skills" spy={true} smooth={true}>
                        <Button>Skills</Button>
                    </Link>
                    <Link to="Archiving" spy={true} smooth={true}>
                        <Button>Archiving</Button>
                    </Link>
                    <Link to="Projects" spy={true} smooth={true}>
                        <Button>Projects</Button>
                    </Link>
                </Toolbar>
            </HeaderBar>
        </MyAppBar>
    )
};

export default DesktopHeader;