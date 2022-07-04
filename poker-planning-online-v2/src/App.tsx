import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/game/:id" component={GamePage} />
        <Route path="/join/:id" component={HomePage} />
        <Route exact path="/*" component={HomePage} />
      </Switch>
    </Router>
  );
}
export default App;
