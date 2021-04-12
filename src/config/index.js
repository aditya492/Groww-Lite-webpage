import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCdCI6DCgiddJTYj_bZqcSKskzI2iR3La8",
  authDomain: "groww-lite.firebaseapp.com",
  projectId: "groww-lite",
  storageBucket: "groww-lite.appspot.com",
  messagingSenderId: "521151466271",
  appId: "1:521151466271:web:2ce0198522191e84147e2a",
  measurementId: "G-FWZ0RSBWVY",
};

const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;
