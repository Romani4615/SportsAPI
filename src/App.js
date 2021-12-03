import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Teams from './views/Teams';
import Players from './views/Players';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
        <Route exact path="/" render={ ()=> <Home /> } />
        <Route exact path="/Teams" render={ ()=> <Teams /> } />
        <Route exact path="/Players" render={ ()=> <Players /> } />

        </Routes>
      </div>
    )
  }
}
