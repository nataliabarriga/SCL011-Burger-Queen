// Your web app's Firebase configuration

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";

firebase.initializeApp({
  apiKey: "AIzaSyAcQrlw1Rpgv63owLGkJ6xEHXPKg5wAhgs",
  authDomain: "k1ltr4squeen.firebaseapp.com",
  projectId: "k1ltr4squeen",
  storageBucket: "k1ltr4squeen.appspot.com",
  messagingSenderId: "603850727877",
  appId: "1:603850727877:web:ad7d906094de893508abac"
})

let dataBase = firebase.firestore();
dataBase.settings({timestampsInSnapshots:true});

export default dataBase;

// export default {
//   apiKey: "AIzaSyAcQrlw1Rpgv63owLGkJ6xEHXPKg5wAhgs",
//   authDomain: "k1ltr4squeen.firebaseapp.com",
//   databaseURL: "https://k1ltr4squeen.firebaseio.com",
//   projectId: "k1ltr4squeen",
//   storageBucket: "k1ltr4squeen.appspot.com",
//   messagingSenderId: "603850727877",
//   appId: "1:603850727877:web:ad7d906094de893508abac"
// };
