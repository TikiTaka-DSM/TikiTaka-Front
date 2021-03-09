import React from "react";
import Login from "./components/User/Login";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import SignUp from "./components/User/SignUp";
import MyProfile from "./components/Profile/MyProfile";
import Profile from "./components/Profile/Profile";
import Main from "./components/Main/Main";
import ChatView from "./components/Main/ChatView";
import ProfileEdit from "./components/Profile/ProfileEdit";

function App() {
  return (
    <Router>
      <Switch>
        <>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signUp" component={SignUp} />
          <Route path="/myProfile" component={MyProfile} />
          <Route path="/profile" component={Profile} />
          <Route path="/main" component={Main} />
          <Route exact path="/main/chat" component={ChatView} />
          <Route exact path="/edit" component={ProfileEdit} />
          {/* <Redirect path="*" exact to="/login" /> */}
        </>
      </Switch>
    </Router>
  );
}

export default App;
