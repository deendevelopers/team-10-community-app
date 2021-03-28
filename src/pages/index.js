import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Community from "./Community";
import CommunityList from "./CommunityList";
import Language from "./Language";
import Location from "./Location";

const RouterComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/langauge" component={Language} />
        <Route path="/location" component={Location} />
        <Route path="/community-list" component={CommunityList} />
        <Route path="/community/:id" component={Community} />
        <Route path="/" component={Language} />
      </Switch>
    </Router>
  );
};

export default RouterComponent;
