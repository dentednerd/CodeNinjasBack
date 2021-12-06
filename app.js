const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = require('./code-ninjas-3-firebase-adminsdk-68gkr-55153dda98.json');

const firebaseConfig = {
  credential: cert(serviceAccount)
};

initializeApp(firebaseConfig);

const db = getFirestore();

module.exports = { db };

const snapshot = db.collection('levels').doc('0');

console.log(snapshot);
