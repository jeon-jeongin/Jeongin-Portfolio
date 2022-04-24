import { Box, Container, styled } from "@material-ui/core";
import { theme } from "../../styles";

export const HomeContainer = styled(Container)({
    top: '0',
    marginTop: '10em',
})

export const InfoContainer = styled(Box)({
    fontWeight: '700',
    wordBreak: 'keep-all',
    fontSize: '4rem',
    [theme.breakpoints.down("sm")]: {
        fontSize: '3.5em',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: '3em',
    },
})

export const InfoContent = styled(Box)({
    marginTop: '15px',
    fontSize: '1.3rem',
    [theme.breakpoints.down("sm")]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: '1em',
    },
})