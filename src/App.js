import React from 'react';
import './App.css';
import './Navbar'
import './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
