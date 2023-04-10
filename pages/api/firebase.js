import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0V4fMV1-ak2aaSoLkd8KhvKkgt4UbEAo",
  authDomain: "world-generator.firebaseapp.com",
  projectId: "world-generator",
  storageBucket: "world-generator.appspot.com",
  messagingSenderId: "915505937723",
  appId: "1:915505937723:web:6b78b73957281bda008b1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

//Sign in with google
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {

      const user = result.user;
      if (user) {
        const userId = user.uid;
        const tokens = 5;
        const usersCollection = collection(db, "users");
  
        usersCollection.doc(userId).get().then((doc) => {
          if (!doc.exists) {
            usersCollection.doc(userId).set({
            tokenNumber: tokenNumber,
            });
            console.log('Set')
          }
  });
}

    })
    .catch((error) => 
      alert(error));
};

//Sign the user out
export const signOut = () => {
  auth.signOut();
}