import firebase from "firebase";
import "firebase/database";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBWIChIUj1AfkN9DBWbret8ncfm3qKuDtc",
  authDomain: "web-iot-88aba.firebaseapp.com",
  databaseURL: "https://web-iot-88aba.firebaseio.com",
  projectId: "web-iot-88aba",
  storageBucket: "web-iot-88aba.appspot.com",
  messagingSenderId: "558837933022",
});

export default app;
