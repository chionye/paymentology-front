import Banner from "./components/Banner";
import CompareFiles from "./components/CompareFiles";
import { FileProvider } from "./context/index.context";
import Footer from "./components/Footer";

function App() {
  return (
    <FileProvider>
      <Banner />
      <CompareFiles />
      <Footer />
    </FileProvider>
  );
}

export default App;
