import React from "react";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Community from "./Community";
import CommunityList from "./CommunityList";
import Language from "./Language";
import Location from "./Location";

const RouterComponent = () => 
    <>
    <div className="w-full absolute bg-blue-200 bg-opacity-0 p-5">
          <nav className="flex-row md:justify-between">
              <a href="/">
                <img src="/logo.png" width={250}/>
              </a>
          </nav>
      </div>
      <Router>
        <Switch>
          <Route path="/langauge" component={Language} />
          <Route path="/location" component={Location} />
          <Route path="/community-list" component={CommunityList} />
          <Route path="/community/:id" component={Community} />
          <Route exact path="/" component={Language} />
        </Switch>
      </Router>
    </>
  


export default RouterComponent;
