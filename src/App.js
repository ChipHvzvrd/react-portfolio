import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GHLogo from '../src/assets/images/octo-cat.png';
import LILogo from '../src/assets/images/li-logo.png';
import { Image } from 'react-bootstrap';
import NavBar from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState();
  
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <About></About>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
      <footer>
        <div id="footerBar">
        <a href='https://github.com/ChipHvzvrd'><Image id="footimg" src={GHLogo}></Image>@ChipHvzvrd</a>
        <a href='https://www.linkedin.com/in/christian-pena-1434621b5/'><Image id="footimg" src={LILogo}></Image>@Christian_Pena</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
