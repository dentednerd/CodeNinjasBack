require('dotenv').config();
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firebaseConfig = {
  credential: cert({
    'projectId': process.env.FIREBASE_PROJECT_ID,
    'private_key': process.env.FIREBASE_PRIVATE_KEY,
    'client_email': process.env.FIREBASE_CLIENT_EMAIL,
  })
};

initializeApp(firebaseConfig);

const db = getFirestore();

module.exports = { db };
