import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table'
import Title from './components/Title';
import firebase from './firebase/firebase';
import 'font-awesome/css/font-awesome.css'
import './App.css';

class App extends Component {

   constructor() {
      super();

      this.state ={
         name: [],
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
                  <th>Points {<i className="fa fa-caret-down"></i>}</th>
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
