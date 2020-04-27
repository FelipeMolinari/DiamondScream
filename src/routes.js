import React from "react";

import { Switch, Route } from "react-router-dom";
import SummonerPage from "./Pages/SummonerPage";
import Home from "./Pages/Home";
import Teams from "./Pages/Teams";
export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/profile/:region/:summonerName/overview"
        exact
        component={SummonerPage}
      />
      <Route path="/teams" exact component={Teams} />
    </Switch>
  );
}
