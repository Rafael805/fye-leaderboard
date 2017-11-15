import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table'
import Title from './components/Title';
import './App.css';
import firebase from './firebase/firebase';

class App extends Component {

   constructor() {
      super();
      this.state ={
         name: ['Ralph', 'Andres', 'Steve','Ralph', 'Andres', 'Steve']
      }
   }

   componentDidMount() {
      const itemsRef = firebase.database().ref('masterSheet');
      itemsRef.on('value', (snapshot) => {
         let items = snapshot.val();
         console.log(`${items[1]}`);
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
                  <th>Student</th>
                  <th>Points</th>
               </tr>
            </thead>

            <tbody>
               {this.state.name.map((item, i) => (
                  <tr key={i}>
                     <td>{i + 1}</td>
                     <td>{item}</td>
                     <td>{i + 2}</td>
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
