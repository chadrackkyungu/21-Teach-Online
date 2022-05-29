import { initializeApp } from "firebase/app"
import { getAuth,connectAuthEmulator } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator  } from "firebase/firestore/lite"
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

//for firebase functions 
import { getApp } from "firebase/app";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";



const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const Db = getFirestore(app);
export const analytics = getAnalytics(app); //https://firebase.google.com/docs/analytics/get-started?platform=web
export const perf = getPerformance(app);
// ==========PRODUCTION MODE END HERE=========


// ! LOCALHOST
const auth_localhost = getAuth();
const db_localhost = getFirestore();
const functions_localhost = getFunctions(getApp());

if(window.location.hostname.includes("localhost")) {

  // ! Documentation Link on how to implement
  //https://firebase.google.com/docs/emulator-suite/connect_firestore
  connectFirestoreEmulator(db_localhost, 'localhost', 4000);


  // ! Documentation Link on how to implement
  //https://firebase.google.com/docs/emulator-suite/connect_auth#web-version-9
  connectAuthEmulator(auth_localhost, "http://localhost:9099"); 


  
  connectFunctionsEmulator(functions_localhost, "localhost", 5001);
}
