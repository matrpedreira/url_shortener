import * as admin from 'firebase-admin';
import serviceAccount from '../firebase_admin.json';
import Link from '../models/Link.js';

const FIREBASE_URL = 'https://urlshortener-8cef3.firebaseio.com';

function FirebaseDB() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: FIREBASE_URL,
  });
  const firestore = admin.firestore();

  async function getURL(urlKey) {
    try {
      const docResponse = await firestore.collection('links').doc(urlKey).get();
      return docResponse;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async function checkIfKeyWasUsed(urlKey) {
    const document = await getURL(urlKey);
    return document.createTime !== undefined;
  }

  return {
    getURL,
    async createURL(urlKey, url) {
      const keyWasUsed = await checkIfKeyWasUsed(urlKey);
      if (!keyWasUsed) {
        try {
          const newDoc = await firestore.collection('links').doc(urlKey).set({
            url,
            createdAt: Date.now(),
            clicks: 0,
          });
          return newDoc;
        } catch (error) {
          console.log(error);
          throw error;
        }
      } else {
        throw new Error('URLKEY ALREADY USED');
      }
    },
    async fetchURLs() {
      try {
        const linksCollection = await firestore.collection('links').orderBy('createdAt', 'DESC').limit(10).get();
        return linksCollection.docs.map(doc => new Link(doc));
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  };
}

module.exports = FirebaseDB;
