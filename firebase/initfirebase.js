import { initializeApp } from "firebase/app";

export default function initFirebase() {
  try {
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
      storageBucket: "gs://clothes-63fc8.appspot.com",
    });
    console.log("Firebase initialized");
  } catch (error) {
    console.error("Error initializing Firebase");
  }
}
