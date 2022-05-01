import { Box } from "@material-ui/core";
import { InfoContainer, InfoContent, MoreButton } from "./shared/HomeComponents";
import { SharedContainers, SharedContainer } from "./shared/Shared";
import { ArrowDownward } from '@material-ui/icons';
import Link from "react-scroll/modules/components/Link";

function Home() {
    return (
        <SharedContainers id="Home"
            style={{
                backgroundColor: '#F9FAFB',
                backgroundImage: `url(${require('../images/background_image.png')})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'bottom right'
            }}>
            <SharedContainer>
                <InfoContainer>
                    고객과 서비스의 접점을 설계하는
                    <br />
                    프론트엔드 개발자
                    <br />
                    전정인입니다.
                </InfoContainer>
                <InfoContent>
                    몰입하고 성장하는 개발자 전정인입니다.
                    <br />
                    끈기를 가지고 문제를 해결했을 때의 쾌감과 기쁨을 좋아합니다.
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