const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { addDoc } = require("firebase/firestore");
admin.initializeApp();
const db = admin.firestore();

exports.createUserDocument = functions.auth.user().onCreate(() => {
    addDoc(collection(db, "users"), {
        uid: user.uid,
        tokens: 5
    });
});
