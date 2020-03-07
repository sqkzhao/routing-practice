import React from 'react';
import './App.css';
import { Router } from '@reach/router'

import Home from './components/Home'
import IdComponent from './components/IdComponent'
import WordColor from './components/WordColor'


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <IdComponent path="/:id"/> 
        <WordColor path="/:word/:color/:bgColor"/>
      </Router>
    </div>
  );
}

export default App;
