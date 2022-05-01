import { Box, styled } from "@material-ui/core";
import styledComponents from "styled-components";

export const ArchivingContent = styled(Box)({
    padding: '0.5rem 1rem'
})

export const ArchivingTitle = styledComponents.span`
    line-height: 50px;
`
export const SubTitle = styledComponents.div`
    color: #1696D8;
    margin-bottom: 15px;
    &:hover{
        text-decoration: underline;
    }
`

export const ArchivingTitleContainer = styled(Box)({
    display: 'flex',
    fontWeight: '700',
    fontSize: '1.5rem',
});

export const SubTitleContent = styled(Box)({
    marginBottom: "1rem"
});

export const FontBold = styledComponents.span`
    font-weight: 600;
`

export const Content = styledComponents.li`
    margin-top: 8px;
    font-size: 14px;
`