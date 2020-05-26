import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import * as ROUTES from "./constants/routes";
import HomePage from "./components/Home";
import DetailedItem from "./components/Items/DetailedItem";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={ROUTES.HOME} component={HomePage} exact />
        <Route path={ROUTES.DETAILED} component={DetailedItem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
