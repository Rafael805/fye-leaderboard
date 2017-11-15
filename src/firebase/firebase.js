import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCzG4F-zDvq2vI4z7dQR5NQlWN6Bhul5vY",
  authDomain: "fye-leaderboard.firebaseapp.com",
  databaseURL: "https://fye-leaderboard.firebaseio.com",
  projectId: "fye-leaderboard",
  storageBucket: "fye-leaderboard.appspot.com",
  messagingSenderId: "573527471146"
};

firebase.initializeApp(config);

export default firebase;

// CONSOLE OUTPUT FROM THE EXCEL SHEET
/*
database.ref().on('value', (snapshot) => {
   const val = snapshot.val();
   // Outputs "Andres" from the excel sheet
   console.log(`${val.masterSheet[1][3]}`);
}, (e) => {
   console.log('Error with data fetching', e);
});
*/


// FETCH DATA FROM DATABASE
/*
database.ref('masterSheet')
   .once('value')
   .then((snapshot) => {
      const val = snapshot.val();
      console.log(val)
   })
   .catch((e) => {
      console.log('Error fetching data', e);
   });
*/
