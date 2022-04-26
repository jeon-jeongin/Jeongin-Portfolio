import AboutMe from "./components/AboutMe";
import Archiving from "./components/Archiving";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { GlobalStyles } from "./styles";
import { ViewportProvider } from "./utils/ViewportProvider";

function App() {
  return (
    <>
      <ViewportProvider>
        <GlobalStyles />
        <Header />
        <Home />
        <AboutMe />
        <Skills />
        <Archiving />
        <Projects />
      </ViewportProvider>
    </>
  );
}

export default App;
