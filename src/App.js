import React, { Component } from 'react'
import { BrowserRouter as Router , Route, Link } from 'react-router-dom'

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
              </ul>

              <Route exact path="/" component={StudentLeaderboard}/>
              <Route path="/teamscores" component={TeamScores}/>
            </div>
         </Router>
    );
  }
}
