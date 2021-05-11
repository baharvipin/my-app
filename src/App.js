import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Fragment>
      <Router>
        <div>
          {/* <nav> 
            <div>
              <Link to="/admin">Admin</Link>
            </div>
            <di>
              <Link to="/healthcheck">Healthcheck</Link>
            </di> 
          </nav> */}
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/healthcheck">
              <Health />
            </Route>
            <Route path="/admin">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}
function About() {
  return <h2>Admin</h2>;
}
function Health() {
  return <h2>Health Check Up</h2>;
}
