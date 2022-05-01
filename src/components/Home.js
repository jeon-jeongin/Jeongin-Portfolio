import { Box } from "@material-ui/core";
import { InfoContainer, InfoContent, MoreButton } from "./shared/HomeComponents";
import { SharedContainers, SharedContainer } from "./shared/Shared";
import { ArrowDownward } from '@material-ui/icons';
import Link from "react-scroll/modules/components/Link";

function Home() {
    return (
        <SharedContainers id="Home" style={{ backgroundColor: '#F9FAFB' }}>
            <SharedContainer>
                <InfoContainer>
                    고객과 서비스의 접점을 설계하는
                    <br />
                    프론트엔드 개발자
                    <br />
                    전정인입니다.
                </InfoContainer>
                <InfoContent>
                    계속해서 성장하고 싶은 개발자입니다.
                    <br />
                    문제가 발생하여도 포기하지 않고 끝까지 디버깅을 시도하는 끈기를 가지고 있습니다.
                </InfoContent>
                <Link to="About me" spy={true} smooth={true}>
                    <Box style={{ textAlign: 'center' }}>
                        <MoreButton> 더 알아보기 <ArrowDownward /></MoreButton>
                    </Box>
                </Link>
            </SharedContainer>
        </SharedContainers>
    );
};

export default Home;