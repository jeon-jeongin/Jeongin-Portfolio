import { Box, Grid, styled } from "@material-ui/core";
import styledComponents from "styled-components";
import { theme } from "../../styles";

export const TitleContainer = styled(Box)({
    fontWeight: '700',
    wordBreak: 'keep-all',
    fontSize: '3.5rem',
    padding: '3rem 0 1rem 0',
    textAlign: 'center',
    [theme.breakpoints.down("sm")]: {
        fontSize: '3em',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: '2.5em',
    },
});

export const Title = styledComponents.span`
    border-bottom: 1px solid #dbdbdb;
`
export const InfoContainer = styled(Grid)({
    display: 'flex',
    flexWrap: 'wrap',
    margin: '1rem 0em 5rem 5em',
    [theme.breakpoints.down("xs")]: {
        margin: '1rem 0em 5rem 9em'
    },
})

export const InfoWrapper = styledComponents.div`
    display: flex;
    svg{
        font-size: 2rem;
    }
`

export const InfoItems = styledComponents.div`
    div{
        display: flex;
        flex-direction: column;
    }
`

export const InfoTitle = styledComponents.div`
    font-weight: 700;
    font-size: 1.5rem;
    padding: 0 2rem;
`

export const InfoContent = styledComponents.div`
    font-size: 16px;    
    padding: 0.5rem 2rem;
`