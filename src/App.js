import React, { Component } from 'react'
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'

import Game from "../src/components/Game/Game"
import About from "../src/components/About/About"
import TeamScores from "../src/components/TeamScores/TeamScores"
import StudentLeaderboard from "../src/components/StudentLeaderboard/StudentLeaderboard"
import './App.css'

export default class App extends Component {
   render() {
      return (
         <Router>
            <div>
              <ul className="header">
               <li className="brand">FYE</li>
               <li><Link to="/">Leaderboard</Link></li>
               <li><Link to="/teamscores">Team Scores</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/game">Play</Link></li>
              </ul>

              <Route exact path="/" component={StudentLeaderboard}/>
              <Route path="/teamscores" component={TeamScores}/>
              <Route path="/about" component={About}/>
              <Route path="/game" component={Game}/>
            </div>
         </Router>
    );
  }
}
