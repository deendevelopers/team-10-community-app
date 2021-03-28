import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Language from "./Language";
import Location from "./Location";
import CommunityList from "./CommunityList";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/langauge" component={Language} />
        <Route path="/location" component={Location} />
        <Route exact path="/community-list" component={CommunityList} />
        <Route path="/" component={Language} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
