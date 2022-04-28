import { Grid } from "@material-ui/core";
import Slider from "react-slick/lib/slider";
import { ContentDetail, Contents, Images, ProjectDay, ProjectsContaienr, ProjectSub, ProjectTitile, Url } from "../shared/ProjectComponents";
import main from '../../images/ourlife/main.png';
import login from '../../images/ourlife/login.png';
import signup from '../../images/ourlife/signup.png';
import mypage from '../../images/ourlife/mypage.png';
import uploadfeed from '../../images/ourlife/uploadfeed.png';
import search from '../../images/ourlife/search.png';
import chatroom from '../../images/ourlife/chatroom.png';
import chatlist from '../../images/ourlife/chatlist.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UnderLine } from "../shared/Shared";

function OurLife() {
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
                아워 라이프 웹사이트
            </ProjectTitile>
            <ProjectDay variant="subtitle1">
                2022.02 ~ 2022.03 (1人 개인 프로젝트)
            </ProjectDay>
            <Grid container spacing={3}>
                <Grid item md={7} sm={12} xs={12} style={{ margin: '0 auto' }}>
                    <Slider {...settings}>
                        <div>
                            <Images src={main} alt="메인 홈" />
                        </div>
                        <div>
                            <Images src={login} alt="로그인 페이지" />
                        </div>
                        <div>
                            <Images src={signup} alt="회원 가입 페이지" />
                        </div>
                        <div>
                            <Images src={mypage} alt="마이 페이지" />
                        </div>
                        <div>
                            <Images src={uploadfeed} alt="게시물 등록 페이지" />
                        </div>
                        <div>
                            <Images src={search} alt="검색 페이지" />
                        </div>
                        <div>
                            <Images src={chatroom} alt="채팅방 페이지" />
                        </div>
                        <div>
                            <Images src={chatlist} alt="유저 리스트 페이지" />
                        </div>
                    </Slider>
                </Grid>
                <Grid item md={5} sm={12} xs={12} style={{ margin: '0 auto' }}>
                    <ProjectSub variant="subtitle1">
                        인터넷 사용이 증가하며 긴 글을 읽는 것들 보다는 이미지 중심으로 사용자의 일상을 등록하고
                        그에 대한 데이터에 대한 정보를 제공받을 수 있어 편리성이 높아지며 다른 곳에서 정보를 찾아보는 시간을 줄일 수 있는 서비스입니다.
                    </ProjectSub>
                    <UnderLine />
                    <ProjectSub variant="subtitle1">기능</ProjectSub>
                    <Contents>
                        <ContentDetail>React, styled-components로 프론트엔드 작업</ContentDetail>
                        <ContentDetail>Apollo Server와 Node.js를 사용하여 Back-end 구축</ContentDetail>
                        <ContentDetail>Amazon S3를 사용하여 이미지 처리를 진행</ContentDetail>
                        <ContentDetail>dark-mode 적용</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">사용 기술</ProjectSub>
                    <Contents>
                        <ContentDetail>Frontend : React, CSS3</ContentDetail>
                        <ContentDetail>Backend : Node.js, Apollo, Prisma</ContentDetail>
                        <ContentDetail>DataBase : GraphQL</ContentDetail>
                        <ContentDetail>Deployment : Amazom AWS, Amazom S3</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">GitHub</ProjectSub>
                    <a href="https://github.com/jeon-jeongin/final-project-frontend" target='_blank' rel="noreferrer">
                        <Url>github.com/jeon-jeongin/final-project-frontend</Url>
                    </a>
                    <a href="https://github.com/jeon-jeongin/final-project-backend" target='_blank' rel="noreferrer">
                        <Url>github.com/jeon-jeongin/final-project-backend</Url>
                    </a>
                </Grid>
            </Grid>
        </ProjectsContaienr>
    )
}

export default OurLife;