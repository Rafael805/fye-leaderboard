import React, { Component } from 'react';
import Table from 'react-bootstrap/lib/Table'
import Title from './components/Title';
import './App.css';
import './firebase/firebase';

class App extends Component {

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
                  <tr>
                     <td>1</td>
                     <td>Ralph</td>
                     <td>100</td>
                  </tr>
                  <tr>
                     <td>2</td>
                     <td>Melani</td>
                     <td>80</td>
                  </tr>
            </tbody>
         </Table>
      </div>
    );
  }
}

export default App;
