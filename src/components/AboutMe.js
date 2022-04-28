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
                            <InfoMainTitle>왜 프론트엔드 개발자가 되고싶은가?</InfoMainTitle>
                            <InfoMainContent variant="body2">
                                취업하고서도 더 성장하고 싶다는 생각을 가지고 있었습니다.
                                처음에는 회사에 적응하고 일이 어렵게 느껴졌지만 적응하고서는 반복적인 일을 조금 더 시간을 효율적으로 사용하며 진행할 방법이 없겠냐는 의문을 가지게 되었습니다.
                                반복적인 업무를 자동화 처리를 하기 위해서 파이선을 독학으로 언어 공부를 시작하였고, 처음에는 pyautogui를 사용하여 한 사람이 할 일을 컴퓨터로 돌려 다른 일을 할 수 있는 시간을 얻었습니다.
                                이 부분에서 개발에 대해서 더욱 관심을 가지게 되며, 자동화 업무팀과 협업을 통해서 프로그램을 만들게 되었습니다.
                                언어를 공부하면서 제대로 시작을 해보고 싶어서 무모한 도전일지 모르지만 퇴사하고서 멀티캠패스 풀 스택 국비 교육을 2021년 10월부터 시작하였습니다.
                                교육을 들으면서 화면상으로 바로 나타나는 부분과 고객들이 보는 화면을 직접 개발한다는 부분에서 프론트엔드에 관심을 가지게 되었습니다.
                                Javascript, React, CSS, HTML을 공부하면서 아직은 부족한 부분이 많지만 계속 공부를 해가면서 자신을 채워가는 부분이 너무 행복하고, 꼭 프론트엔드라는 직업을 해내고 싶은 꿈을 가지게 되었습니다.
                            </InfoMainContent>
                        </Info>
                    </Grid>
                </Grid>
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