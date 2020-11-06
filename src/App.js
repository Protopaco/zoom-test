import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Authorized from './Authorized.js';

export default class App extends Component {


  render() {
    return (
      <div className="searchpage-main">
        <Router>
          <Switch>
            <Route
              path="/auth/"
              exact
              render={(routerProps) => <Authorized {...routerProps} />}
            />
            {/* <Route
              path="/create"
              exact
              render={(routerProps) => <GoodBoyCreation {...routerProps} />}
            />
            <Route
              path="/edit/:dog_id"
              exact
              render={(routerProps) => <GoodBoyUpdate {...routerProps} />}
            /> */}
          </Switch>
        </Router>
      </div>

    )
  }
}
