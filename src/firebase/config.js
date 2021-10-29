import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
const FirebaseConfig = {
    apiKey: "AIzaSyAXbIMP3EbVZpxWmC01s3an3tGVUI-zeN4",
    authDomain: "flipkartdemo-f5627.firebaseapp.com",
    projectId: "flipkartdemo-f5627",
    storageBucket: "flipkartdemo-f5627.appspot.com",
    messagingSenderId: "391588847191",
    appId: "1:391588847191:web:3ad3f4d04bd1c9e093cd12",
    measurementId: "G-7HPLGP1S9H"
  };
 export default firebase.initializeApp(FirebaseConfig)