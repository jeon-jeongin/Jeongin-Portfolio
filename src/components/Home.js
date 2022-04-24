import { HomeContainer, InfoContainer, InfoContent } from "./shared/HomeComponents";

function Home() {
    return (
        <div>
            <HomeContainer id="Home">
                <InfoContainer>
                    안녕하세요.
                    <br />
                    프론트엔드 개발자
                    <br />
                    전정인입니다.
                </InfoContainer>
                <InfoContent>
                    게속해서 성장하고 싶은 개발자입니다.
                    <br />
                    문제가 발생하여도 포기하지 않고 끝까지 디버깅을 시도하는 끈기를 가지고 있습니다.
                </InfoContent>
            </HomeContainer>
        </div>
    );
};

export default Home;