import { Box, Button, styled } from "@material-ui/core";
import { theme } from "../../styles";

export const InfoContainer = styled(Box)({
    fontWeight: '700',
    wordBreak: 'keep-all',
    fontSize: '3.5rem',
    lineHeight: '5.2rem',
    padding: '7rem 0 1rem 0',
    [theme.breakpoints.down("sm")]: {
        padding: '6rem 0 1rem 0',
        fontSize: '3.5em',
        lineHeight: '4.8rem',
    },
    [theme.breakpoints.down("xs")]: {
        padding: '5rem 0 1rem 0',
        fontSize: '3em',
        lineHeight: '4.5rem',
    },
})

export const InfoContent = styled(Box)({
    fontSize: '1.3rem',
    lineHeight: '2.2rem',
    marginTop: '3rem',
    paddingBottom: '8rem',
    [theme.breakpoints.down("sm")]: {
        fontSize: '1.2rem',
        marginTop: '2.5rem',
        paddingBottom: '6rem',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: '1em',
        marginTop: '2rem',
        paddingBottom: '5rem',
    },
})

export const MoreButton = styled(Button)({
    fontFamily: 'Montserrat ,sans-serif',
    border: '1px solid #666666',
    borderRadius: '30px',
    padding: '10px 15px',
    marginBottom: '3.5rem'
})