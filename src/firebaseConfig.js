
import firebase from "firebase/app";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBQ6CPZRaGRaqlYB6YRu8KzYZwJLXaDjNM",
//   authDomain: "task-manager-project-42398.firebaseapp.com",
//   projectId: "task-manager-project-42398",
//   storageBucket: "task-manager-project-42398.appspot.com",
//   messagingSenderId: "163900467702",
//   appId: "1:163900467702:web:e1654ac80c8c08a71abfd7"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBjSSYQm4r4TtsGnY8AOeIgIaccfqr2nWA",
  authDomain: "moulham-dont-fuck-this-up.firebaseapp.com",
  projectId: "moulham-dont-fuck-this-up",
  storageBucket: "moulham-dont-fuck-this-up.appspot.com",
  messagingSenderId: "642431455206",
  appId: "1:642431455206:web:a2159b281fbbe0906e1027"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();