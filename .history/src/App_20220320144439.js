import Banner from "./components/Banner";
import CompareFiles from "./components/CompareFiles";
import { FileProvider } from "./context/index.context";
import Results from "./components/Results";
import Report from "./components/Report";
import Title from "./components/Title";

function App() {
  return (
    <FileProvider>
      <Banner />
      <CompareFiles />
      <div className=""></div>
      <Results />
      <Report />
    </FileProvider>
   
  );
}

export default App;
