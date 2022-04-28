import { Box, Container, styled } from "@material-ui/core";
import styledComponents from "styled-components";

export const SharedContainers = styledComponents.div`
    height: 100%;
    padding-bottom: 64px;
`

export const SharedContainer = styled(Container)({
    position: 'relative',
    top: '64px',
})

export const UnderLine = styledComponents.hr`
    width: 100%;
    background-color: #fefefef;
    margin: 10px 0;
    border: solid 0.1px #dedede;
`;

export const FooterContainer = styled(Box)({
    padding: '3rem 0 0.5rem 0',
    textAlign: 'center',
});

export const Image = styledComponents.img`
    color: #ffffff;
`;

export const FooterContent = styled(Box)({
    padding: '0 0 3rem 0',
    textAlign: 'center',
    color: '#ffffff',
});