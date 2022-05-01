import { Grid } from "@material-ui/core";
import Slider from "react-slick/lib/slider";
import { Images, ProjectDay, ProjectsContaienr, ProjectSub, ProjectTitile, Contents, ContentDetail, Url } from "../shared/ProjectComponents";
import main from '../../images/modri/main.png';
import login from '../../images/modri/login.png';
import signup1 from '../../images/modri/signup1.png';
import signup2 from '../../images/modri/signup2.png';
import subpage from '../../images/modri/subpage.png';
import search from '../../images/modri/search.png';
import detail from '../../images/modri/detail.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UnderLine } from "../shared/Shared";

function Modri() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <ProjectsContaienr>
            <ProjectTitile variant="h4">
                모드리 웹사이트
            </ProjectTitile>
            <ProjectDay variant="subtitle1">
                2021.12 | 개인 프로젝트
            </ProjectDay>
            <Grid container spacing={4}>
                <Grid item md={7} sm={12} xs={12} style={{ marginBottom: '1.5rem' }}>
                    <Slider {...settings}>
                        <div>
                            <Images src={main} alt="메인 홈" />
                        </div>
                        <div>
                            <Images src={login} alt="로그인 페이지" />
                        </div>
                        <div>
                            <Images src={signup1} alt="회원동의 페이지" />
                        </div>
                        <div>
                            <Images src={signup2} alt="회원 가입 페이지" />
                        </div>
                        <div>
                            <Images src={subpage} alt="서브 페이지 페이지" />
                        </div>
                        <div>
                            <Images src={search} alt="검색 페이지" />
                        </div>
                        <div>
                            <Images src={detail} alt="상품 디테일 페이지" />
                        </div>
                    </Slider>
                </Grid>
                <Grid item md={5} sm={12} xs={12} style={{ margin: '0 auto' }}>
                    <ProjectSub variant="subtitle1">자신에게 맞는 제품을 한번에 정리된 곳에서 정보를 찾아보는 사이트입니다.</ProjectSub>
                    <UnderLine />
                    <ProjectSub variant="subtitle1">기능</ProjectSub>
                    <Contents>
                        <ContentDetail>HTML, CSS3, Javascript로 프론트엔드 작업</ContentDetail>
                        <ContentDetail>Spring과 jsp로 동적인 웝페이지 작업</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">사용 기술</ProjectSub>
                    <Contents>
                        <ContentDetail>Frontend : HTML, CSS3, Javascript</ContentDetail>
                        <ContentDetail>Backend : Spring, Java</ContentDetail>
                        <ContentDetail>DataBase : MySQL</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">GitHub</ProjectSub>
                    <a href="https://github.com/jeon-jeongin/frontend-project-modri" target='_blank' rel="noreferrer">
                        <Url>github.com/jeon-jeongin/frontend-project-modri</Url>
                    </a>
                    <a href="https://github.com/jeon-jeongin/backend-project-modri" target='_blank' rel="noreferrer">
                        <Url> github.com/jeon-jeongin/backend-project-modri</Url>
                    </a>
                </Grid>
            </Grid>
        </ProjectsContaienr>
    )
}

export default Modri;