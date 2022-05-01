import { Box, Grid, Paper, styled } from "@material-ui/core";
import { theme } from "../../styles";

export const SkillsContainers = styled(Grid)({
    display: 'flex',
    flexWrap: 'wrap',
    margin: '1rem 0em 5rem 0em',
});

export const SkillsContaienr = styled(Paper)({
    width: '85%',
    margin: '0 auto',
    boxShadow: '-10px 10px 20px #C7CAD1',
    padding: '2rem',
    borderRadius: '30px',
    "&:hover": {
        transform: 'scale(1.05)',
    },
});

export const SkillsTitleContainer = styled(Box)({
    display: 'flex',
    fontSize: '1.2rem',
    color: '#666',
});

export const ChartContainer = styled(Box)({
    padding: '0 3rem',
    [theme.breakpoints.down("xs")]: {
        padding: '0rem 5rem',
    },
});
