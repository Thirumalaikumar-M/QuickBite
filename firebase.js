import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4BOSgbg3VTytvp0hlt5rqTSYqk830hbY",
  authDomain: "quickbite-d9c07.firebaseapp.com",
  projectId: "quickbite-d9c07",
  storageBucket: "quickbite-d9c07.appspot.com",
  messagingSenderId: "839386785661",
  appId: "1:839386785661:web:b8dc7920bdfffe150d4e14",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
