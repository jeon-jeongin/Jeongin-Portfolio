import { Container, styled } from "@material-ui/core";
import styledComponents from "styled-components";

export const SharedContainers = styledComponents.div`
    height: 100%;
    padding-bottom: 64px;

`

export const SharedContainer = styled(Container)({
    position: 'relative',
    top: '64px',
})
