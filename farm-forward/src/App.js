//import logo from './logo.svg';
import React from 'react';
//import { Route, Routes } from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header';
import OnboardingScreen from './onboardingScreen';
import Finance from './finance';
import TutorialScreen from './tutorialScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <OnboardingScreen/>
        </Route>
        <Route path="/finance">
          <Finance/>
        </Route>
        <Route path="/tutorials">
          <Finance/>
        </Route>
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
