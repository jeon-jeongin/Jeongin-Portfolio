import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer } from "./shared/AboutMeComponents";
import { SkillsContainers } from "./shared/SkillsComponents";
import { Grid } from "@material-ui/core";
import { ProjectDay, ProjectsContaienr, ProjectTitile } from "./shared/ProjectComponents";
import Modri from "./Project/Modri";
import OurGoods from "./Project/OurGoods";
import OurLife from "./Project/OurLife";
import Portfolio from "./Project/Portfolio";

function Projects() {
    return (
        <SharedContainers id="Projects" style={{ backgroundColor: '#F9FAFB' }}>
            <SharedContainer>
                <TitleContainer>
                    <Title>
                        Projects
                    </Title>
                </TitleContainer>
                <SkillsContainers container spacing={2}>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <Modri />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <OurGoods />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <OurLife />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <ProjectsContaienr>
                            <ProjectTitile variant="h4">
                                뉴스 키즈 웹사이트
                            </ProjectTitile>
                            <ProjectDay variant="subtitle1">
                                2022.03 ~ 2022.04 | 팀 프로젝트
                            </ProjectDay>
                        </ProjectsContaienr>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <Portfolio />
                    </Grid>
                </SkillsContainers>
            </SharedContainer>
        </SharedContainers>
    );
};

export default Projects;