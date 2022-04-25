import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Home from "./components/Home";
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
      </ViewportProvider>
    </>
  );
}

export default App;
