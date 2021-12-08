import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Teams from './views/Teams';
import Players from './views/Players';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path="/" render={ ()=> <Home /> } />
        <Route path="/teams">
          <Teams />
        </Route>
        <Route exact path="/Players" render={ ()=> <Players /> } />

        </Switch>
      </div>
    )
  }
}
