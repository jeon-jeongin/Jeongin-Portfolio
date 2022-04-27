import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer } from "./shared/AboutMeComponents";
import { Grid } from "@material-ui/core";
import { SkillsContaienr, SkillsContainers, SkillsTitleContainer, ChartContainer } from "./shared/SkillsComponents";
import FrontChart from "./Skills/FrontChart";
import BackChart from "./Skills/BackChart";
import DataBaseChart from "./Skills/DataBaseChart";

function Skills() {
    return (
        <SharedContainers id="Skills" style={{ backgroundColor: '#aeadab' }}>
            <SharedContainer>
                <TitleContainer>
                    <Title>
                        Skills
                    </Title>
                </TitleContainer>
                <SkillsContainers container spacing={3}>
                    <Grid item md={4} sm={6} xs={12} style={{ margin: '0 auto' }}>
                        <SkillsContaienr>
                            <SkillsTitleContainer>
                                Fontend
                            </SkillsTitleContainer>
                            <ChartContainer>
                                <FrontChart />
                            </ChartContainer>
                        </SkillsContaienr>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <SkillsContaienr>
                            <SkillsTitleContainer>
                                Backend
                            </SkillsTitleContainer>
                            <ChartContainer>
                                <BackChart />
                            </ChartContainer>
                        </SkillsContaienr>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <SkillsContaienr>
                            <SkillsTitleContainer>
                                Database
                            </SkillsTitleContainer>
                            <ChartContainer>
                                <DataBaseChart />
                            </ChartContainer>
                        </SkillsContaienr>
                    </Grid>
                </SkillsContainers>
            </SharedContainer>
        </SharedContainers>
    );
};

export default Skills;
