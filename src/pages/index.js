import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Language from "./Language";

const RouterComponent = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Language />
      </Route>
    </Switch>
  </Router>
);

export default RouterComponent;
