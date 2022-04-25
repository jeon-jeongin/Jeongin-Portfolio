import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer, InfoContainer, InfoWrapper, InfoItems, InfoTitle, InfoContent } from "./shared/AboutMeComponents";
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
                <InfoContainer container spacing={3}>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Person />
                            <InfoItems>
                                <InfoTitle>이름</InfoTitle>
                                <InfoContent>전정인</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <CalendarToday />
                            <InfoItems>
                                <InfoTitle>생년월일</InfoTitle>
                                <InfoContent>1998.08.10</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Explore />
                            <InfoItems>
                                <InfoTitle>주소지</InfoTitle>
                                <InfoContent>경기도 부천시</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Call />
                            <InfoItems>
                                <InfoTitle>연락처</InfoTitle>
                                <InfoContent>010-6539-6133</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <Email />
                            <InfoItems>
                                <InfoTitle>이메일</InfoTitle>
                                <InfoContent>wjddls1702@naver.com</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <InfoWrapper>
                            <BusinessCenter />
                            <InfoItems>
                                <InfoTitle>학력</InfoTitle>
                                <InfoContent>동양미래대학교</InfoContent>
                            </InfoItems>
                        </InfoWrapper>
                    </Grid>
                </InfoContainer>
            </SharedContainer>
        </SharedContainers >
    )
}

export default AboutMe;