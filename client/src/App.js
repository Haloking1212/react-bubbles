import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import "./styles.scss";

function App() {
  let password = "i<3Lambd4"

  return (
    <div className="App">
        <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/colors" component={BubblePage} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
