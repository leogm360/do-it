import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/index.jsx";
import Signup from "../pages/Signup/index.jsx";
import Login from "../pages/Login/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";

const Router = ({ token, setToken }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Home token={token} />
      </Route>

      <Route path="/signup">
        <Signup token={token} />
      </Route>

      <Route path="/login">
        <Login token={token} setToken={setToken} />
      </Route>

      <Route path="/user/dashboard">
        <Dashboard token={token} setToken={setToken} />
      </Route>
    </Switch>
  );
};

export default Router;
