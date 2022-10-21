import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Nav';
import About from './components/About';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
