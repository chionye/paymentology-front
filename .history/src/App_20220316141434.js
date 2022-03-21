import CompareFiles from "./components/CompareFiles";
import Results from "./components/Results";
import Report from "./components/Report";

function App() {
  return (
    <>
      <h1>Paymentology Transaction Reconciliation App</h1>
      <CompareFiles />
      <Results />
      <Report />
    </>
   
  );
}

export default App;
