import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
