import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB92WYMGV_e3rjQvTvF0yFACAxE_0c2UtA",
  authDomain: "movea-2639b.firebaseapp.com",
  projectId: "movea-2639b",
  storageBucket: "movea-2639b.appspot.com",
  messagingSenderId: "250933544856",
  appId: "1:250933544856:web:a88eb3a6e27fe256724ded",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
