import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import firebase from './firebase/firebase'
import 'font-awesome/css/font-awesome.css'
import './App.css'

class App extends Component {

   constructor() {
      super();

      this.state ={
         name: [],
         searchTerm: '',
         current: true
      }
   }

   componentDidMount() {
      const itemsRef = firebase.database().ref('masterSheet');
      itemsRef.on('value', (snapshot) => {
         let items = snapshot.val();
         this.setState({
            name: items,
         });
         console.log(`${items[1][4]}`);
      })
   }

   change(value){
      if(this.state.current !== value) {
         this.setState({current: value});
      }
   }

   searchTerm(event) {
      console.log(event.target.value)
   }

   render() {
      const emoji = require("emoji-dictionary");

      const {name, current} = this.state;

      return (
      <div>
         <h1>
            Oxnard College FYE Leaderboard
         </h1>

            <input type="text"
               placeholder="Search name"
               value={this.state.searchTerm}
               onChange={event => this.setState({searchTerm: event.target.value})}
            />

            <button
               className="btn btn-success"
               onClick={this.searchTerm}>
               Search
            </button>

         <Table striped bordered condensed hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Team</th>
                  <th>
                     Points
                     <span></span>
                     {<i onClick={(event) => this.change(false)}
                        className="fa fa-caret-down"> </i>}
                     {<i onClick={(event) => this.change(true)}
                        className="fa fa-caret-up"> </i>}
                  </th>
               </tr>
            </thead>

            <tbody>
               {/* Sorts the students with the most points to the
                  least points */}
                  {/* Sorts the students with the most points to the
                                    least points */}
                  {current && (name.map((item, i) => (
                     <tr key={i}>
                        <td>{i + 1}</td> {/* # */}
                        <td> {item[2]}</td> {/* First Name */}
                        <td>{item[1]}</td> {/* Last Name */}
                        <td>{emoji.getUnicode("heart_eyes") + item[3]}</td> {/* Team */}
                        <td>{item[4]}</td> {/* Points */}
                     </tr>
                  ))
               )}


               {/* Reverses the list of students with the least points to the
                  greatest points */}
               {current === false && (name.slice(0).reverse().map ((item, i) => (
                  <tr key={i}>
                     <td>{i + 1}</td> {/* # */}
                     <td>{item[2]}</td> {/* First Name */}
                     <td>{item[1]}</td> {/* Last Name */}
                     <td>{emoji.getUnicode("heart_eyes") + item[4]}</td> {/* Team */}
                     <td>{item[5]}</td> {/* Points */}
                  </tr>
               ))
            )}
            </tbody>
         </Table>
      </div>
    );
  }
}

export default App;
