import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Language from "./Language";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Language} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
