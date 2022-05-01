import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer } from "./shared/AboutMeComponents";
import { SkillsContainers } from "./shared/SkillsComponents";
import { Grid } from "@material-ui/core";
import Modri from "./Project/Modri";
import OurGoods from "./Project/OurGoods";
import OurLife from "./Project/OurLife";
import Portfolio from "./Project/Portfolio";
import NewsKids from "./Project/NewsKids";

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
                        <NewsKids />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <OurLife />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <Portfolio />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <OurGoods />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <Modri />
                    </Grid>
                </SkillsContainers>
            </SharedContainer>
        </SharedContainers>
    );
};

export default Projects;