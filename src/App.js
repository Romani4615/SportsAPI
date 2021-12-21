import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './views/Home';
import Teams from './views/Teams';
import Players from './views/Players';
import SelectedTeam from './views/SelectedTeam';
export default class App extends Component {
  render() {
    return (
      <div>
        <CustomNavbar />
        <Switch>
        <Route exact path="/" render={ ()=> <Home /> } />
        <Route path="/teams">
          <Teams />
        </Route>
        <Route exact path="/Players" render={ ()=> <Players /> } />
        <Route exact path="/selectedteam" render={ ()=> <SelectedTeam /> } />

        </Switch>
      </div>
    )
  }
}
