import { BrowserRouter } from "react-router-dom";
import { Reset } from "./styles/reset";
import { RootVariables } from "./styles/root-variables";

import Router from "./routes/router.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <RootVariables />
      <Router />
    </BrowserRouter>
  );
};

export default App;
