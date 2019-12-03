import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyAhDYrYMhWgcNv5ut_95281c4CuZhiTafo",
    authDomain: "purduegamersnew.firebaseapp.com",
    databaseURL: "https://purduegamersnew.firebaseio.com",
    projectId: "purduegamersnew",
    storageBucket: "purduegamersnew.appspot.com",
    messagingSenderId: "775250779240",
    appId: "1:775250779240:web:5667ef69749e305cd22fdd",
    measurementId: "G-EP9EETF6J9"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = userRef.get();

      if(!snapShot.exists) {
          const { displayName, email} = userAuth;
          const createdAt = new Date();
      

      try {
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
          })
      }
      catch(error) {
          console.log('error creating user', error.message);
      }
      
    }
    return userRef;
  }

  export const addCollectionAndItems = (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);
      console.log(collectionRef);
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;