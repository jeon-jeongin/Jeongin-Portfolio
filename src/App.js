import Header from "./components/Header";
import { ViewportProvider } from "./utils/ViewportProvider";

function App() {
  return (
    <>
      <ViewportProvider>
        <Header />
      </ViewportProvider>
    </>
  );
}

export default App;
