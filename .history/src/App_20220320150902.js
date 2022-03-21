import Banner from "./components/Banner";
import CompareFiles from "./components/CompareFiles";
import { FileProvider } from "./context/index.context";
import Results from "./components/Results";
import Report from "./components/Report";
import Footer from "./components/Footer";

function App() {
  return (
    <FileProvider>
      <Banner />
      <CompareFiles />
      <div className="bg-gray-light">
        <Results />
      </div>
      <Report />
      <Footer />
    </FileProvider>
   
  );
}

export default App;
