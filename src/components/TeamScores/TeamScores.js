import React, { Component } from 'react'
import PieChartScores from '../PieChartScores/PieChartScores'

export default class TeamScores extends Component {
	render () {
     	return (
         <div>
				<h1 style={{'textAlign': 'center'}}>Team Scores</h1>
         	<PieChartScores />
         </div>
      );
   }
}
