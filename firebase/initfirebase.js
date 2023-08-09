import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

export default function initFirebase() {
  const firebaseApp = initializeApp({
    apiKey: "AIzaSyDEojmwE_5FORH06sbpUquQuEW1hS5C9dA",
    authDomain: "clothes-63fc8.firebaseapp.com",
    projectId: "clothes-63fc8",
    storageBucket: "clothes-63fc8.appspot.com",
    messagingSenderId: "365888276351",
    appId: "1:365888276351:web:6ebc63ac27be7a6bf7fc4a",
    measurementId: "G-D683CHZ5W9",
    databaseURL:
      "https://clothes-63fc8-default-rtdb.europe-west1.firebasedatabase.app",
  });
  const database = getDatabase(firebaseApp);
  console.log("init");
}

export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    username: name,
    email: email,
    profile_picture: imageUrl,
  });
  console.log("Saved");
}
