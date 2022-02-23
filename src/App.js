import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import { Reset } from "./styles/reset";
import { RootVariables } from "./styles/root-variables";
import Router from "./routes/router.jsx";

const App = () => {
  const [token] = useState(
    !!localStorage.getItem("@Doittoken")
      ? localStorage.getItem("@Doittoken")
      : ""
  );

  return (
    <BrowserRouter>
      <Reset />
      <RootVariables />
      <ToastContainer />
      <Router token={token} />
    </BrowserRouter>
  );
};

export default App;
