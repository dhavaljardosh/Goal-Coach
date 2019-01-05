import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyACl7r1iHlThbY521vx8J6nXuDrK0mwZ3w",
    authDomain: "goalcoach-3da14.firebaseapp.com",
    databaseURL: "https://goalcoach-3da14.firebaseio.com",
    projectId: "goalcoach-3da14",
    storageBucket: "goalcoach-3da14.appspot.com",
    messagingSenderId: "237522930390"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goals');
  export const completedRef = firebase.database().ref('completeGoals');