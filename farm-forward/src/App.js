import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header';
import OnboardingScreen from './onboardingScreen';
import Finance from './finance';
import Home from './home';
import TutorialScreen from './tutorialScreen';

const  App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OnboardingScreen} />
        <Route path="/finance" component={Finance} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/tutorials" component={TutorialScreen} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
