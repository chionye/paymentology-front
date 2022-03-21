import CompareFiles from "./components/CompareFiles";
import { FileProvider } from "./context/index.context";
import Results from "./components/Results";
import Report from "./components/Report";
import Title from "./components/Title";
impor
function App() {
  return (
    <FileProvider>
      <Title />
      <CompareFiles />
      <Results />
      <Report />
    </FileProvider>
   
  );
}

export default App;
