import GitLogo from '../images/github.svg';
import NaverLogo from '../images/naver.svg';
import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer } from "./shared/AboutMeComponents";
import { SkillsContaienr, SkillsContainers } from "./shared/SkillsComponents";
import { Grid } from "@material-ui/core";
import { ArchivingContent, ArchivingTitle, ArchivingTitleContainer, Content, FontBold, SubTitle, SubTitleContent } from './shared/ArchivingComponents';

function Archiving() {
    return (
        <SharedContainers id="Archiving">
            <SharedContainer>
                <TitleContainer>
                    <Title>
                        Archiving
                    </Title>
                </TitleContainer>
                <SkillsContainers container spacing={2}>
                    <Grid item md={6} sm={12} xs={12} style={{ margin: '0 auto' }}>
                        <a href="https://github.com/jeon-jeongin" target='_blank' rel="noreferrer">
                            <SkillsContaienr>
                                <ArchivingTitleContainer>
                                    <img width="50px" height="50px" src={GitLogo} alt="git logo" />
                                    <ArchivingTitle>GitHub</ArchivingTitle>
                                </ArchivingTitleContainer>
                                <ArchivingContent>
                                    <SubTitle>
                                        github.com/jeon-jeongin
                                    </SubTitle>
                                    <SubTitleContent>
                                        <FontBold>소스 코드 저장소</FontBold>{" "} 입니다.
                                    </SubTitleContent>
                                    <Content>
                                        프로젝트, 엡의 소스 코드
                                    </Content>
                                    <Content>
                                        혼자 코딩 공부를 위해 만들어 본 소스 코드
                                    </Content>
                                </ArchivingContent>
                            </SkillsContaienr>
                        </a>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                        <a href="https://blog.naver.com/wjddls1702" target='_blank' rel="noreferrer">
                            <SkillsContaienr>
                                <ArchivingTitleContainer>
                                    <img width="50px" height="50px" src={NaverLogo} alt="git logo" />
                                    <ArchivingTitle>Blog</ArchivingTitle>
                                </ArchivingTitleContainer>
                                <ArchivingContent>
                                    <SubTitle>
                                        blog.naver.com/wjddls1702
                                    </SubTitle>
                                    <SubTitleContent>
                                        <FontBold>공부 정리 목적의 블로그</FontBold>{" "} 입니다.
                                    </SubTitleContent>
                                    <Content>
                                        멀티 캠퍼스 교육을 듣고 수업 복습 내용 기록
                                    </Content>
                                    <Content>
                                        개인적으로 모르는 부분을 찾아서 정리
                                    </Content>
                                </ArchivingContent>
                            </SkillsContaienr>
                        </a>
                    </Grid>
                </SkillsContainers>
            </SharedContainer>
        </SharedContainers>
    );
};

export default Archiving;
