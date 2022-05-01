import { Box, Paper, styled, Typography } from "@material-ui/core";
import styledComponents from "styled-components";
import { theme } from "../../styles";

export const ProjectsContaienr = styled(Paper)({
    width: '90%',
    margin: '0 auto',
    marginBottom: '3rem',
    padding: '2rem 2rem 2.5rem 2rem',
    borderRadius: '20px',
    boxShadow: '-10px 10px 20px #C7CAD1',
});

export const Content = styled(Box)({
    margin: '12px 0 24px 0',
    textAlign: 'center',
    fontSize: '14px',
    wordBreak: 'keep-all',
    color: '#666',
    [theme.breakpoints.down("sm")]: {
        fontSize: '12px',
    },
    [theme.breakpoints.down("xs")]: {
        fontSize: '14px',
    },
});

export const ProjectTitile = styled(Typography)({
    fontWeight: '700',
    textAlign: 'center',
});

export const ProjectDay = styled(Typography)({
    fontWeight: '500',
    textAlign: 'center',
    padding: '0.5rem 0 1rem 0',
    color: '#899197',
});


export const Images = styledComponents.img`
    width: 100%;
`;

export const ProjectSub = styled(Typography)({
    fontWeight: '600',
    wordBreak: 'keep-all',
    marginBottom: '0.8rem',
    [theme.breakpoints.down("sm")]: {
        marginBottom: '0.7rem',
    },
    [theme.breakpoints.down("xs")]: {
        marginBottom: '0.6rem',
    },
});

export const Contents = styledComponents.ul`
    margin: 0 0 1.5rem 1rem;
    font-size: 14px;
`

export const ContentDetail = styledComponents.li`
    margin-bottom: 10px;
`;

export const Url = styledComponents.div`
    color: #1696D8;
    font-size: 14px;
    margin-bottom: 8px;
    &:hover{
        text-decoration: underline;
    }
`