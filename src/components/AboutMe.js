import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer, InfoContainer, InfoWrapper, InfoItems, InfoTitle, InfoContent, Info, InfoMainTitle, InfoMainContent } from "./shared/AboutMeComponents";
import { Grid } from "@material-ui/core";
import { Person, CalendarToday, Email, Call, BusinessCenter, Explore } from '@material-ui/icons';

function AboutMe() {
    return (
        <SharedContainers id="About me">
            <SharedContainer>
                <TitleContainer>
                    <Title>
                        About Me
                    </Title>
                </TitleContainer>
                <Grid container spacing={3}>
                    <Grid item md={12} sm={12} xs={12}>
                        <Info>
                            <InfoMainTitle>성장하는 개발자</InfoMainTitle>
                            <InfoMainContent inline>
                                고객과 서비스의 접점인 화면을 직접 구현한다는 부분에서 프론트엔드에 매력을 느끼게 되었습니다.
                                <br/>
                                새로운 기술을 배우고 응용할 때, 내가 짠 코드가 시각적으로 보일 때, 화면으로 부터 고객 서비스가 시작될 때 즐거움과 기쁨을 느끼곤합니다. 또한, 개발에 문제가 생길 때 포기하지 않고 끈기있게 해결합니다. 목표를 달성하고도 만족하지 않고 어떻게 하면 개선할 수 있을지 더 큰 성과를 내기 위해 고민하고 몰입합니다.
                                <br/>
                                배움을 거듭하면서 부족한 부분을 채워가는 것이 행복하고 더욱 성장하는 개발자가 되고싶습니다. 팀원들과 협업하여 많은 사용자와 서비스를 연결짓는 프론트엔드 개발자로 성장하겠습니다.
                            </InfoMainContent>
                        </Info>
                    </Grid>
                </Grid>
                <InfoContainer container spacing={3}>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Person style={{ color: '#E66B63' }} />
                            <InfoItems>
                                <InfoTitle>이름</InfoTitle>
                                <InfoContent>전정인</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <CalendarToday style={{ color: '#E66B63' }} />
                            <InfoItems>
                                <InfoTitle>생년월일</InfoTitle>
                                <InfoContent>1998.08.10</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Explore style={{ color: '#E66B63' }} />
                            <InfoItems>
                                <InfoTitle>주소지</InfoTitle>
                                <InfoContent>경기도 부천시</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Call style={{ color: '#E66B63' }} />
                            <InfoItems>
                                <InfoTitle>연락처</InfoTitle>
                                <InfoContent>010-6539-6133</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Email style={{ color: '#E66B63' }} />
                            <InfoItems>
                                <InfoTitle>이메일</InfoTitle>
                                <InfoContent>wjddls1702@naver.com</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <BusinessCenter style={{ color: '#E66B63' }} />
                            <InfoItems>
                                <InfoTitle>학력</InfoTitle>
                                <InfoContent>
                                    동양미래대학교
                                    <br />
                                    정보통신공학과
                                </InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                </InfoContainer>
            </SharedContainer>
        </SharedContainers >
    )
}

export default AboutMe;