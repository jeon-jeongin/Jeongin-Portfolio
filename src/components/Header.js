import { useViewport } from "../utils/ViewportProvider";
import DesktopHeader from "./Desktop/DesktopHeader";
import MobileHeader from "./Mobile/MobileHeader";

const MyComponent = () => {
    const { width } = useViewport();
    const breakpoint = 630;

    return width < breakpoint ? <MobileHeader /> : <DesktopHeader />
};

function Header() {
    return (
        <MyComponent />
    )
};

export default Header;
