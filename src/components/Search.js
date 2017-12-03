import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <div>
         <input type="text"
            placeholder="Search name"
            style={{ width: 200 }}
         />
      </div>
    );
  }
}
