import firebase from "firebase";
import "firebase/database";

let config = {
  apiKey: "AIzaSyBWIChIUj1AfkN9DBWbret8ncfm3qKuDtc",
  authDomain: "web-iot-88aba.firebaseapp.com",
  databaseURL: "https://web-iot-88aba.firebaseio.com",
};

firebase.initializeApp(config);
export default firebase.database();
