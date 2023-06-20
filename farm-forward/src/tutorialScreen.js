import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './tutorialScreen.css';
import Header from './header';
import Footer from './footer';

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
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  
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
  
    const handleNextVideo = () => {
      setCurrentVideoIndex((prevIndex) => prevIndex + 1);
    };
  
    const handlePreviousVideo = () => {
      setCurrentVideoIndex((prevIndex) => prevIndex - 1);
    };
  
    return (
      <>
      <Header />
      <div className="tutorial-screen">
        
        <div className="side-menu">
          <h3>Tutorials</h3>
          <ul>
            {tutorialVideos.map((video, index) => (
              <li key={index}>
              <button
                className="sidebar-button" 
                onClick={() => setCurrentVideoIndex(index)}
              >
                {video.title}
              </button>
            </li>
            ))}
          </ul>
        </div>
        {tutorialVideos.length > 0 && currentVideoIndex < tutorialVideos.length ? (
          <div className="video-container">
            <h2>{tutorialVideos[currentVideoIndex].title}</h2>
            <p>{tutorialVideos[currentVideoIndex].description}</p>
            <div className="video-wrapper">
              <iframe
                className="video-iframe"
                src={`https://www.youtube.com/embed/${tutorialVideos[currentVideoIndex].videoId}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Tutorial Video"
              ></iframe>
            </div>
            {currentVideoIndex > 0 && (
              <button className="previous-button" onClick={handlePreviousVideo}>
                Previous
              </button>
            )}
            {currentVideoIndex < tutorialVideos.length - 1 && (
              <button className="next-button" onClick={handleNextVideo}>
                Next
              </button>
            )}
          </div>
        ) : (
          <div className="video-container">
            <p>No tutorial videos available.</p>
          </div>
        )}
      </div>
      <Footer/>
      </>
    );
  };
  
  export default TutorialScreen;