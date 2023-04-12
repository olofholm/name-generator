const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.createUserDocument = functions.auth.user().onCreate((user) => {
  db.collection("users")
    .doc(user.uid)
    .set({ 
      tokens: 5,
      name: user.displayName,
      email: user.email    
    });
});

exports.decreaseTokens = functions.https.onRequest((req, res) => {
  const documentId = req.query.documentId; // get the document ID from the request query params

  if (!documentId) {
    return res.status(400).send('Missing required parameter: documentId');
  }

  const docRef = admin.firestore().collection('users').doc(documentId);

  docRef.get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).send('Document not found');
      }

      const data = doc.data();
      const tokens = data.tokens;

      if (!tokens || tokens <= 0) {
        return res.status(400).send('Tokens value must be above 0');
      }

      // Decrease the tokens value in the document
      return docRef.update({ tokens: admin.firestore.FieldValue.increment(-1) });
    })
    .then(() => {
      res.send('Tokens decreased');
    })
    .catch((error) => {
      console.error('Error decreasing tokens:', error);
      res.status(500).send('Error decreasing tokens');
    });
});
