import { Switch, Route } from "react-router-dom";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/"></Route>

      <Route path="/signup"></Route>

      <Route path="/login"></Route>

      <Route path="/dashboard"></Route>
    </Switch>
  );
};

export default Router;
