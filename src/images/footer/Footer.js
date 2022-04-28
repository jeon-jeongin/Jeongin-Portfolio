import GitLogo from '../images/footer/github.svg';
import NaverLogo from '../images/footer/naver.svg';
import { FooterContainer, Image } from "./shared/Shared";

function Footer() {
    return (
        <div style={{ backgroundColor: '#333333' }}>
            <FooterContainer>
                <a href="https://github.com/jeon-jeongin" target='_blank' rel="noreferrer">
                    <Image width="60px" height="60px" src={GitLogo} alt="git logo" />
                </a>
                <a href="https://blog.naver.com/wjddls1702" target='_blank' rel="noreferrer">
                    <Image width="60px" height="60px" src={NaverLogo} alt="naver logo" />
                </a>
            </FooterContainer>
        </div>
    )
}

export default Footer;