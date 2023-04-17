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

//Call to decrease a users tokens
exports.decreaseTokens = functions.https.onRequest((req, res) => {
  // Set CORS headers to allow requests from any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  const documentId = req.query.documentId; // get the document ID from the request query params

  if (!documentId) {
    return res.status(400).send('Missing required parameter: DocumentId');
  }

  const docRef = admin.firestore().collection('users').doc(documentId);

  docRef.get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).send('Document not found');
      }

      const data = doc.data();
      const tokens = data.tokens;
      
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

//Call to read a users tokens
exports.readTokens = functions.https.onRequest((req, res) => {
  // Set CORS headers to allow requests from any origin
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

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
    return doc; // return the document if it exists
  })
  .then((doc) => {
    res.send(`${doc.data().tokens}`);
  })
  .catch((error) => {
    console.error('Error reading tokens:', error);
    res.status(500).send('Error reading tokens');
  });
});