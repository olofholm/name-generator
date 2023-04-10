import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc, getDocs, getFirestore, doc } from "firebase/firestore"; 

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
      initTokens(result.user.uid);
    })
    .catch((error) => 
      alert(error));
};

//Sign the user out
export const signOut = () => {
  auth.signOut();
}

async function initTokens (userId) {
  const collectionRef = collection(db, "users");
  const data = await getDocs(collectionRef);
  const docList = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
  const findDoc = docList.find((doc) => doc.userId === userId);

  if(!findDoc) {
    try {
      const docRef = await addDoc(collectionRef, {
        userId: userId,
        tokens: 5
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  else {
    console.log(findDoc.tokens);
  }
}