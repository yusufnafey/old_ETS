import React from 'react';
import './App.scss';
import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="under-construction-container">
        <h1 class="under-construction-title">🚧UNDER CONSTRUCTION🚧</h1>
        <h4 class="under-construction-subtitle">(but feel free to browse, ignore the mess 😅)</h4>
      </div>
        <Navbar />
        <p>
Easy ATM Solutions
        </p>
        <Footer />
      </header>
    </div>
  );
}

export default App;
