import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
} from "react-router-dom";

import './App.css';
// import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Experiencr from './components/Experiencr';
import Projects from './components/Projects';
import TopNav from './components/TopNav';
import Home from './components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      
        <TopNav></TopNav>
      <Switch>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Experience' element={<Experiencr />}></Route>
          <Route path='/Projects' element={<Projects />}></Route>
        </Switch>
    </div>
    </Router>
  );
}


export default App;