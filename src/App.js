import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table'
import Title from './components/Title';
import './App.css';
import firebase from './firebase/firebase';

class App extends Component {

   constructor() {
      super();

      this.state ={
         name: [],
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

   render() {
      return (
      <div>
         <Title />

         <Table striped bordered condensed hover>
            <thead>
               <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Mentor</th>
                  <th>Points</th>
               </tr>
            </thead>

            <tbody>
               {this.state.name.map ((item, i) => (
                  <tr key={i}>
                     <td>{i + 1}</td> {/* # */}
                     <td>{item[2]}</td> {/* First Name */}
                     <td>{item[1]}</td> {/* Last Name */}
                     <td>{item[3]}</td> {/* Mentor */}
                     <td>{item[4]}</td> {/* Points */}
                  </tr>
               )
            )}
            </tbody>
         </Table>
      </div>
    );
  }
}

export default App;
