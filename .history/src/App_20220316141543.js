import CompareFiles from "./components/CompareFiles";
import Results from "./components/Results";
import Report from "./components/Report";

function App() {
  return (
    <>
      <h1 className="font-medium tracking-wider text-2xl text-gray-900">Paymentology Transaction <span></span> App</h1>
      <CompareFiles />
      <Results />
      <Report />
    </>
   
  );
}

export default App;
