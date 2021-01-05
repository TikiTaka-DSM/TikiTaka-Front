import React from "react";
import Login from "./components/User/Login";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import SignUp from "./components/User/SignUp";

function App() {
  return (
    <Router>
      <Switch></Switch>
      <Redirect path="*" exact to="/login" />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signUp" component={SignUp} />
    </Router>
  );
}

export default App;
