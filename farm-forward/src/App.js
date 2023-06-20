//import logo from './logo.svg';
import React from 'react';
//import { Route, Routes } from "react-router";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './header';
import OnboardingScreen from './onboardingScreen';
import Finance from './finance';

const  App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OnboardingScreen} />
        <Route path="/finance" component={Finance} />
        <Route exact path="/header" component={Header} />
      </Switch>
    
    </BrowserRouter>
  );
}

export default App;
