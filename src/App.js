import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import firebase from './firebase/firebase'
import 'font-awesome/css/font-awesome.css'
import './App.css'

const emoji = require("emoji-dictionary");
const lion = emoji.getUnicode("tiger");
const fireball = emoji.getUnicode("fire");
const pink = emoji.getUnicode("cherry_blossom");
const green_dragon = emoji.getUnicode("seedling");
const baby = emoji.getUnicode("baby");
const jose = emoji.getUnicode("laughing");

class App extends Component {

   constructor() {
      super();
      this.state ={
         name: [],
         searchTerm: '',
         current: true
      }
   }

   componentWillMount() {
      this.setState({searchName: this.state.name});
   }

   componentDidMount() {
      console.log("Amazing!")
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

   updateSearch(event) {
      this.setState({searchTerm: event.target.value.substr(0,20)});
      //console.log(event.target.value)
   }

   render() {
      const {name, searchTerm, current} = this.state;
      let updatedList = name.filter((item) => {
         return (
            item[2].toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
            item[1].toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
         )
      });

      return (
      <div>
         <img id="fye" src="oc_fye.png" alt="fye"/>

         <input type="text"
            placeholder="Search name"
            className="form-control form-control-lg"
            value={searchTerm}
            onChange={this.updateSearch.bind(this)}
         />


         <Table striped bordered condensed hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Team</th>
                  <th>
                     Points
                     {<i onClick={(event) => this.change(false)}
                        className="fa fa-caret-down"> </i>}
                     {<i onClick={(event) => this.change(true)}
                        className="fa fa-caret-up"> </i>}
                  </th>
               </tr>
            </thead>

            <tbody >
               {/* Sorts the students with the most points to the
                  least points */}
                  {/* Sorts the students with the most points to the
                                    least points */}
                  {current && (updatedList.map((item, i) => (
                     <tr key={i}>
                        <td>{i+1}</td>{/* # */}
                        <td>{item[2]}</td>{/* First Name */}
                        <td>{item[1]}</td>{/* Last Name */}
                        <td>
                           {(() => {
                              switch (item[4]) {
                              case "Lions": return lion;
                              case "Green Legacy": return green_dragon;
                              case "Jose's Girls": return jose;
                              case "Los Chiqui Babies": return baby;
                              case "Fireball": return fireball;
                              case "Pink Flying Ponies": return pink;
                              default: return "error"
                             }
                        })()} {item[4]}
                        </td>{/* Team */}
                        <td>{item[5]}</td>{/* Points */}
                     </tr>
                  ))
               )}


               {/* Reverses the list of students with the least points to the
                  greatest points */}
               {current === false && (updatedList.slice(0).reverse().map ((item, i) => (
                  <tr key={i}>
                     <td>{i+1}</td>{/* # */}
                     <td>{item[2]}</td>{/* First Name */}
                     <td>{item[1]}</td>{/* Last Name */}
                     <td>{
                        item[4] === "Lions" ? (
                           emoji.getUnicode("heart_eyes") + item[4]) : (
                              "lol"
                           )}
                     </td>{/* Team */}
                     <td>{item[5]}</td>{/* Points */}
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
