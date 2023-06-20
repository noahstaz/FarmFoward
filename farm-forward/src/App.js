import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header';
import OnboardingScreen from './onboardingScreen';
import Finance from './finance';
import Home from './home';
import Footer from './footer';
import TutorialScreen from './tutorialScreen';
import EquipmentPage from './equipment';

const  App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OnboardingScreen} />
        <Route path="/finance" component={Finance} />
        <Route exact path="/header" component={Header} />
        <Route exact path="/home" component={Home} />
       < Route exact path="/footer" component={Footer} />
        <Route exact path="/tutorials" component={TutorialScreen} />
        <Route exact path="/equipment" component={EquipmentPage} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
