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

firebase.database().ref()
   .once('value')
   .then((snapshot) => {
      const val = snapshot.val();
      console.log(val)
   })
   .catch((e) => {
      console.log('Error fetching data', e);
   });
