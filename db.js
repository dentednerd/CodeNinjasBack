process.env.NODE_ENV !== 'production' && require('dotenv').config({ silent: process.env.NODE_ENV === 'production' });
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const firebaseConfig = {
  credential: cert({
    'projectId': process.env.FIREBASE_PROJECT_ID,
    'private_key': process.env.NODE_ENV === 'production' ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY).replace(/\\n/g, '\n') : process.env.FIREBASE_PRIVATE_KEY,
    'client_email': process.env.FIREBASE_CLIENT_EMAIL,
  })
};

initializeApp(firebaseConfig);

const db = getFirestore();

module.exports = { db };
