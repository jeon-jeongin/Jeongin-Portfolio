import { Grid } from "@material-ui/core";
import Slider from "react-slick/lib/slider";
import { ContentDetail, Contents, Images, ProjectDay, ProjectsContaienr, ProjectSub, ProjectTitile, Url } from "../shared/ProjectComponents";
import main_1 from '../../images/newskids/main_1.png';
import main_2 from '../../images/newskids/main_2.png';
import login from '../../images/newskids/login.png';
import signup from '../../images/newskids/signup.png';
import mypage_1 from '../../images/newskids/mypage_1.png';
import mypage_2 from '../../images/newskids/mypage_2.png';
import mypage_3 from '../../images/newskids/mypage_3.png';
import mypage_4 from '../../images/newskids/mypage_4.png';
import quiz from '../../images/newskids/quiz.png';
import dictation from '../../images/newskids/dictation.png';
import search from '../../images/newskids/search.png';
import wordcount from '../../images/newskids/wordcount.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UnderLine } from "../shared/Shared";

function NewsKids() {
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
                뉴스 키즈 웹사이트
            </ProjectTitile>
            <ProjectDay variant="subtitle1">
                2022.03 ~ 2022.04 | 팀 프로젝트
            </ProjectDay>
            <Grid container spacing={3}>
                <Grid item md={7} sm={12} xs={12} style={{ marginBottom: '1.5rem' }}>
                    <Slider {...settings}>
                        <div>
                            <Images src={main_1} alt="메인 홈, 사전 검색" />
                        </div>
                        <div>
                            <Images src={main_2} alt="메인 홈" />
                        </div>
                        <div>
                            <Images src={search} alt="검색 페이지" />
                        </div>
                        <div>
                            <Images src={wordcount} alt="워드 페이지" />
                        </div>
                        <div>
                            <Images src={quiz} alt="퀴즈 페이지" />
                        </div>
                        <div>
                            <Images src={dictation} alt="받아쓰기 페이지" />
                        </div>
                        <div>
                            <Images src={login} alt="로그인 페이지" />
                        </div>
                        <div>
                            <Images src={signup} alt="회원 가입 페이지" />
                        </div>
                        <div>
                            <Images src={mypage_1} alt="마이 페이지" />
                        </div>
                        <div>
                            <Images src={mypage_2} alt="정보수정 페이지" />
                        </div>
                        <div>
                            <Images src={mypage_3} alt="비밀번호 수정 페이지" />
                        </div>
                        <div>
                            <Images src={mypage_4} alt="회원탈퇴 페이지" />
                        </div>
                    </Slider>
                </Grid>
                <Grid item md={5} sm={12} xs={12} style={{ margin: '0 auto' }}>
                    <ProjectSub variant="subtitle1">
                        최근 방송에서 조명된 스마트폰 사용량 증가와 코로나의 여파로 증가하는 어린이들의 문해력 수준 저하가 나타나고 있습니다.
                        어린이의 시선에서 재미있는 국어 교육 콘텐츠를 통해서 어린이의 문해력을 높이기 위해서 웹서비스를 기획하였습니다.
                    </ProjectSub>
                    <UnderLine />
                    <ProjectSub variant="subtitle1">기능</ProjectSub>
                    <Contents>
                        <ContentDetail>React, styled-components로 프론트엔드 작업</ContentDetail>
                        <ContentDetail>django를 사용하여 Back-end 구축</ContentDetail>
                        <ContentDetail>jwt를 통한 웹 토큰을 사용한 로그인 암호화 사용</ContentDetail>
                        <ContentDetail>tts를 사용한 받아쓰기 기능</ContentDetail>
                        <ContentDetail>react-d3-cloud를 사용하여 기사에 있는 단어 확인</ContentDetail>
                        <ContentDetail>우리말 샘 api를 사용하여 모르는 단어를 사전으로 단어 검색 가능</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">사용 기술</ProjectSub>
                    <Contents>
                        <ContentDetail>Frontend : React, CSS3</ContentDetail>
                        <ContentDetail>Backend : django</ContentDetail>
                        <ContentDetail>DataBase : MySQL</ContentDetail>
                        <ContentDetail>Deployment : Amazom EC2, Amazom S3</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">GitHub</ProjectSub>
                    <a href="https://github.com/encore-NFT/news-kids" target='_blank' rel="noreferrer">
                        <Url>github.com/encore-NFT/news-kids</Url>
                    </a>
                </Grid>
            </Grid>
        </ProjectsContaienr>
    )
}

export default NewsKids;