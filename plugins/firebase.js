import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDiBLuNgZjyvzlfw9D1J58VtDAM8S6Om3U",
  authDomain: "test-1d4d7.firebaseapp.com",
  projectId: "test-1d4d7",
  storageBucket: "test-1d4d7.appspot.com",
  messagingSenderId: "713394573280",
  appId: "1:713394573280:web:1fe89e27396f09dec1e585",
  measurementId: "G-X7Q1S5G6LV"
  });
}

export default firebase;