import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalStyles } from "./styles";
import { ViewportProvider } from "./utils/ViewportProvider";

function App() {
  return (
    <>
      <ViewportProvider>
        <GlobalStyles />
        <Header />
        <Home />
      </ViewportProvider>
    </>
  );
}

export default App;
