import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Authorized from './Authorized.js';
import LandingPage from './LandingPage.js'

export default class App extends Component {
  state = {
    code: ''
  }

  handleSetState = (stateObject) => {
    this.setState(stateObject);
  }

  render() {
    return (
      <div className="searchpage-main">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <LandingPage {...routerProps}
                handleSetState={this.handleSetState}
              />}
            />
            <Route
              path="/auth/"
              exact
              render={(routerProps) => <Authorized {...routerProps}
                baseState={this.state}

              />}
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
