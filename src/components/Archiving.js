import { SharedContainers, SharedContainer } from "./shared/Shared";
import { Title, TitleContainer } from "./shared/AboutMeComponents";

function Archiving() {
    return (
        <SharedContainers id="Archiving">
            <SharedContainer>
                <TitleContainer>
                    <Title>
                        Archiving
                    </Title>
                </TitleContainer>
            </SharedContainer>
        </SharedContainers>
    );
};

export default Archiving;