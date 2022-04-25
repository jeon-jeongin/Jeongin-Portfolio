import { Box, Button, styled } from "@material-ui/core";
import { theme } from "../../styles";

export const InfoContainer = styled(Box)({
    fontWeight: '700',
    wordBreak: 'keep-all',
    fontSize: '3.8rem',
    padding: '5rem 0 1rem 0',
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
    paddingBottom: '2rem',
    [theme.breakpoints.down("sm")]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: '1em',
    },
})

export const MoreButton = styled(Button)({
    fontFamily: 'Montserrat ,sans-serif',
    border: '1px solid #666666',
    borderRadius: '30px',
    padding: '10px 15px',
    marginBottom: '3.5rem'
})