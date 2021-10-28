// import firebase from 'firebase';
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAfZG4dEMVDFeEpREQgt-uwmSmVmPl-J9M",
  authDomain: "reacjs-4e3ce.firebaseapp.com",
  databaseURL: "https://reacjs-4e3ce-default-rtdb.firebaseio.com",
  projectId: "reacjs-4e3ce",
  storageBucket: "reacjs-4e3ce.appspot.com",
  messagingSenderId: "626770285873",
  appId: "1:626770285873:web:41c0c57b89f1d21aeb0c10",
  measurementId: "G-23DZ760TV2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
// export default firebase;
