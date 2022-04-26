import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer } from "./shared/AboutMeComponents";

function Projects() {
    return (
        <SharedContainers id="Projects" style={{ backgroundColor: '#aeadab' }}>
            <SharedContainer>
                <TitleContainer>
                    <Title>
                        Projects
                    </Title>
                </TitleContainer>
            </SharedContainer>
        </SharedContainers>
    );
};

export default Projects;