import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_API}`,
    authDomain: `${process.env.DOMAIN}`,
    projectId: `${process.env.PROJECT}`,
    storageBucket: `${process.env.STORAGE}`,
    messagingSenderId: `${process.env.SENDER}`,
    appId: `${process.env.APP}`
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };