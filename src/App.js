import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";

import { Reset } from "./styles/reset";
import { RootVariables } from "./styles/root-variables";
import Router from "./routes/router.jsx";

const App = () => {
  const localToken = localStorage.getItem("@Doittoken");

  const [token, setToken] = useState(!!localToken ? localToken : "");

  return (
    <BrowserRouter>
      <Reset />
      <RootVariables />

      <ToastContainer />

      <Router token={token} setToken={setToken} />
    </BrowserRouter>
  );
};

export default App;
