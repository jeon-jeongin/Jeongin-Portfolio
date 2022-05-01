import { Grid } from "@material-ui/core";
import Slider from "react-slick/lib/slider";
import { ContentDetail, Contents, Images, ProjectDay, ProjectsContaienr, ProjectSub, ProjectTitile, Url } from "../shared/ProjectComponents";
import home from '../../images/portfolio/home.png';
import aboutme from '../../images/portfolio/aboutme.png';
import archiving from '../../images/portfolio/archiving.png';
import skills from '../../images/portfolio/skills.png';
import project from '../../images/portfolio/project.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UnderLine } from "../shared/Shared";

function Portfolio() {
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
                포트폴리오 웹사이트
            </ProjectTitile>
            <ProjectDay variant="subtitle1">
                2022.04 | 개인 프로젝트
            </ProjectDay>
            <Grid container spacing={3}>
                <Grid item md={7} sm={12} xs={12} style={{ marginBottom: '1.5rem' }}>
                    <Slider {...settings}>
                        <div>
                            <Images src={home} alt="메인 홈" />
                        </div>
                        <div>
                            <Images src={aboutme} alt="나의 관한 내용" />
                        </div>
                        <div>
                            <Images src={archiving} alt="백업" />
                        </div>
                        <div>
                            <Images src={skills} alt="나의 스킬" />
                        </div>
                        <div>
                            <Images src={project} alt="프로젝트" />
                        </div>
                    </Slider>
                </Grid>
                <Grid item md={5} sm={12} xs={12} style={{ margin: '0 auto' }}>
                    <ProjectSub variant="subtitle1">
                        포트폴리오 용도로 제작한 웹사이트입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                    </ProjectSub>
                    <UnderLine />
                    <ProjectSub variant="subtitle1">기능</ProjectSub>
                    <Contents>
                        <ContentDetail>React, styled-components로 프론트엔드 작업</ContentDetail>
                        <ContentDetail>material-ui를 사용한 반응형 웹</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">사용 기술</ProjectSub>
                    <Contents>
                        <ContentDetail>Frontend : React, CSS3</ContentDetail>
                        <ContentDetail>Deployment : Heroku</ContentDetail>
                    </Contents>
                    <ProjectSub variant="subtitle1">GitHub</ProjectSub>
                    <a href="https://github.com/jeon-jeongin/Jeongin-Portfolio" target='_blank' rel="noreferrer">
                        <Url>github.com/jeon-jeongin/Jeongin-Portfolio</Url>
                    </a>
                </Grid>
            </Grid>
        </ProjectsContaienr>
    )
}

export default Portfolio;