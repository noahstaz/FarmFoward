import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBRb11u50agYCE8SVSp-ubBcDDFHzptYDQ",
    authDomain: "farm-forward-agtech.firebaseapp.com",
    projectId: "farm-forward-agtech",
    storageBucket: "farm-forward-agtech.appspot.com",
    messagingSenderId: "122720931481",
    appId: "1:122720931481:web:97fbca3dd2cc66facef208"
  };

  const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

const TutorialScreen = () => {
  const [tutorialVideos, setTutorialVideos] = useState([]);

  useEffect(() => {
    // Fetch the list of tutorial videos from Firebase
    const fetchTutorialVideos = async () => {
      try {
        const tutorialsCollectionRef = collection(firestore, 'tutorials');
        const tutorialsSnapshot = await getDocs(tutorialsCollectionRef);
        const tutorials = tutorialsSnapshot.docs.map((doc) => doc.data());
        setTutorialVideos(tutorials);
      } catch (error) {
        console.log('Error fetching tutorial videos:', error);
      }
    };

    fetchTutorialVideos();
  }, []);

  return (
    <div>
      <h2>Tutorial Videos</h2>
      {tutorialVideos.length > 0 ? (
        <ul>
          {tutorialVideos.map((tutorial) => (
            <li key={tutorial.id}>
              <h3>{tutorial.title}</h3>
              <p>{tutorial.description}</p>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${tutorial.videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p>Duration: {tutorial.duration}</p>
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