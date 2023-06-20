import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore'; // import any Firebase services you want to use


const firebaseConfig = {
    apiKey: "AIzaSyBRb11u50agYCE8SVSp-ubBcDDFHzptYDQ",
    authDomain: "farm-forward-agtech.firebaseapp.com",
    projectId: "farm-forward-agtech",
    storageBucket: "farm-forward-agtech.appspot.com",
    messagingSenderId: "122720931481",
    appId: "1:122720931481:web:97fbca3dd2cc66facef208"
  };



// Initialize Firebase
firebase.initializeApp({
  firebaseConfig
});

const TutorialScreen = () => {
  useEffect(() => {
    // Access Firebase services here
    const firestore = firebase.firestore();

    // Use Firebase services as needed
    // ...
  }, []);

  return (
    <div>
      {/* Your component content */}
    </div>
  );
};

export default TutorialScreen;
