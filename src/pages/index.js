import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Language from "./Language";
import Location from "./Location";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Language} />
        <Route exact path="/location" component={Location} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
