import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/index.jsx";
import Signup from "../pages/Signup/index.jsx";
import Login from "../pages/Login/index.jsx";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/dashboard"></Route>
    </Switch>
  );
};

export default Router;
