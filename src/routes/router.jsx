import { Switch, Route } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

import Home from "../pages/Home/index.jsx";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/signup"></Route>

      <Route path="/login"></Route>

      <Route path="/dashboard"></Route>
    </Switch>
  );
};

export default Router;
