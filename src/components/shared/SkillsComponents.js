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
    padding: '2rem',
    borderRadius: '10px',
    "&:hover": {
        transform: 'scale(1.05)',
    },
});

export const SkillsTitleContainer = styled(Box)({
    display: 'flex',
    fontWeight: '700',
    fontSize: '1.5rem',
});

export const ChartContainer = styled(Box)({
    padding: '0 3rem',
    [theme.breakpoints.down("xs")]: {
        padding: '0rem 5rem',
    },
});
