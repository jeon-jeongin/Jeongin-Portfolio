import { Grid } from "@material-ui/core";
import Slider from "react-slick/lib/slider";
import { ContentDetail, Contents, Images, ProjectDay, ProjectsContaienr, ProjectSub, ProjectTitile, Url } from "../shared/ProjectComponents";
import main1 from '../../images/ourgoods/main1.png';
import main2 from '../../images/ourgoods/main2.png';
import login from '../../images/ourgoods/login.png';
import signup from '../../images/ourgoods/signup.png';
import profiledit from '../../images/ourgoods/profiledit.png';
import chat from '../../images/ourgoods/chat1.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UnderLine } from "../shared/Shared";

function OurGoods() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <ProjectsContaienr>
            <ProjectTitile variant="h4">
                아워 굿즈 웹사이트
            </ProjectTitile>
            <ProjectDay variant="subtitle1">
                2022.01 ~ 2022.02 | 팀 프로젝트
            </ProjectDay>
            <Grid container spacing={3}>
                <Grid item md={7} sm={12} xs={12} style={{ marginBottom: '1.5rem' }}>
                    <Slider {...settings}>
                        <div>
                            <Images src={main1} alt="메인 홈" />
                        </div>
                        <div>
                            <Images src={main2} alt="메인 홈 배너" />
                        </div>
                        <div>
                            <Images src={login} alt="로그인 페이지" />
                        </div>
                        <div>
                            <Images src={signup} alt="회원 가입 페이지" />
                        </div>
                        <div>
                            <Images src={profiledit} alt="개인 정보 수정 페이지" />
                        </div>
                        <div>
                            <Images src={chat} alt="채팅 페이지" />
                        </div>
                    </Slider>
                </Grid>
                <Grid item md={5} sm={12} xs={12} style={{ margin: '0 auto' }}>
                    <ProjectSub variant="subtitle1">
                        과거 엔터 사업에서 유행한 굿즈 마케팅 시장이 커지면서 다양한 브랜드 분야에 확대가 되며 희소성이 있는 굿즈에 관심이 커지고 있습니다.
                        원하는 굿즈를 양도하거나 교환을 하는 부분을 해결하기 위해서 진행한 굿즈 거래 플랫폼입니다.
                    </ProjectSub>
                    <UnderLine />
                    <ProjectSub variant="subtitle1">기능</ProjectSub>
                    <Contents>
                        <ContentDetail>React, styled-components로 프론트엔드 작업</ContentDetail>
                        <ContentDetail>Spring Boot로 동적인 웝페이지 작업</ContentDetail>
                        <ContentDetail>회원가입시 email 인증</ContentDetail>
                        <ContentDetail>카카오 주소 api를 사용 아여 주소 위치등록</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">사용 기술</ProjectSub>
                    <Contents>
                        <ContentDetail>Frontend : React, CSS3</ContentDetail>
                        <ContentDetail>Backend : Spring Boot, Java</ContentDetail>
                        <ContentDetail>DataBase : MySQL</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">GitHub</ProjectSub>
                    <a href="https://github.com/jeon-jeongin/GoodsTradingPlatform" target='_blank' rel="noreferrer">
                        <Url>github.com/jeon-jeongin/GoodsTradingPlatform</Url>
                    </a>
                </Grid>
            </Grid>
        </ProjectsContaienr>
    )
}

export default OurGoods;