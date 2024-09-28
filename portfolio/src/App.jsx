import './App.css'
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Nav />
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Contact />
      
    </>
  )
}

export default App
