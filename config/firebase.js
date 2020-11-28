import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA8Ja_I-mV2cBI7Z8Jpq7Pbj2c8bGCTMBs",
  authDomain: "rekswap-2df7a.firebaseapp.com",
  databaseURL: "https://rekswap-2df7a.firebaseio.com",
  projectId: "rekswap-2df7a",
  storageBucket: "rekswap-2df7a.appspot.com",
  messagingSenderId: "24193976383",
  appId: "1:24193976383:web:2211c8ac24a40cbbe3908a",
  measurementId: "G-YLJTGMYJW1"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const app = firebase.app();
const auth = firebase.auth();
const db = firebase.firestore();
const now = firebase.firestore.Timestamp.now();
const storage = firebase.storage();
const provider = new firebase.auth.FacebookAuthProvider();
const google_provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  'display': 'popup'
});

export { auth, db, now, storage, provider, google_provider };
console.log(app.name ? 'Firebase Mode Activated!' : 'Firebase not working :(');