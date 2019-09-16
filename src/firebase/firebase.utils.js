import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCDIC1reJA6YMAxVtOfskzMozkF5K761TA",
  authDomain: "undercart.firebaseapp.com",
  databaseURL: "https://undercart.firebaseio.com",
  projectId: "undercart",
  storageBucket: "",
  messagingSenderId: "324306530526",
  appId: "1:324306530526:web:ed30b3685f3c9c5349924f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;