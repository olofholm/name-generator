const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.createUserDocument = functions.auth.user().onCreate(() => {
    db.collection("users")
    .doc(user.uid)
    .set(JSON.parse(JSON.stringify(user)));
});
