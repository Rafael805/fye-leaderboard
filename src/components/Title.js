import React, { Component } from 'react';
import './TitleStyles.css'

export default class Title extends Component {
  render() {
    return (
      <div id="content">
         <h1 style={{marginLeft: '1%'}}>
            Oxnard College FYE Leaderboard
         </h1>
         <img src="oc_fye.png" alt="fye"/>
      </div>
    );
  }
}
