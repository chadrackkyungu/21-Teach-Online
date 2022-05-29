import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore, connectFirestoreEmulator  } from "firebase/firestore/lite"
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";


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

//https://firebase.google.com/docs/analytics/get-started?platform=web
// const analytics = getAnalytics(app);

const perf = getPerformance(app);

connectFirestoreEmulator(Db, 'localhost', 4000);