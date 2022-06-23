import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBcwrnpPud1HVKdw7M2dyDlNN9HuRVzbng",
    authDomain: "voting-8fc88.firebaseapp.com",
    projectId: "voting-8fc88",
    storageBucket: "voting-8fc88.appspot.com",
    messagingSenderId: "613365074372",
    appId: "1:613365074372:web:5df12f9c92f61d3f31fc91",
    measurementId: "G-M7B9EH945K"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();