import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// import { getAnalytics } from 'firebase/analytics'; // Optional

const firebaseConfig = {
  apiKey: "AIzaSyDV7HzFwrRMMRy7PYa6Zpr8VOQk5PvFUQ8",
  authDomain: "graphitedge-student-progress.firebaseapp.com",
  projectId: "graphitedge-student-progress",
  storageBucket: "graphitedge-student-progress.appspot.com",
  messagingSenderId: "333636638361",
  appId: "1:333636638361:web:ed58c487bcd07732488a08",
  measurementId: "G-ZPD4BWPX4H"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(firebaseApp); // Optional

export { firebaseApp, auth, db };