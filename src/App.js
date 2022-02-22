import Router from "./routes/router.jsx";
import { Reset } from "./styles/reset";
import { RootVariables } from "./styles/root-variables";

const App = () => {
  return (
    <>
      <Reset />
      <RootVariables />
      <Router />
    </>
  );
};

export default App;
