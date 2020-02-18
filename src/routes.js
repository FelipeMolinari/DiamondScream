import React from "react";

import { Switch, BrowserRouter, Route } from "react-router-dom";
import SummonerPage from "./Pages/SummonerPage";
import Home from "./Pages/Home";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/profile/:region/:summonerName/overview"
        exact
        component={SummonerPage}
      />
    </Switch>
  );
}
