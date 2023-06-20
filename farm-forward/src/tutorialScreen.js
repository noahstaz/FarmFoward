import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


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
    const [tutorialVideos, setTutorialVideos] = useState([]);
  
    useEffect(() => {
      // Fetch the list of tutorial videos from Firebase
      const fetchTutorialVideos = async () => {
        const firestore = firebase.firestore();
        const videosCollection = await firestore.collection('tutorials').get();
        console.log(videosCollection.docs.length);
        const videos = videosCollection.docs.map((doc) => doc.data());
        setTutorialVideos(videos);
      };
  
      fetchTutorialVideos();
    }, []);
  
    return (
      <div>
        <h2>Tutorial Videos</h2>
        {tutorialVideos.length > 0 ? (
          <ul>
            {tutorialVideos.map((video) => (
              <li key={video.id}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <video src={video.videoUrl} controls />
                <p>Duration: {video.duration}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading tutorial videos...</p>
        )}
      </div>
    );
  };
  
  export default TutorialScreen;