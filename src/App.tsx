import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import './App.css';
import { Qrreader } from './qrreader/Qrreader'
import { Settings } from './settings/Settings';
import Navigation from './navigation';


function App() {
  let defaultprop:any = 
    (<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lerne React
        </a>
        <Qrreader />

      </header>
    </div>

  );

  let appStructure = 
     ( 
      <Router>
        <Navigation/>
        <Routes>
          <Route path="/" element= {<h1>Hallo</h1>} />
          <Route path="/setting" element= {<Settings/>} /> 
          <Route path="/qrreader" element= {<Qrreader/>} /> 
        </Routes>
        <Qrreader/>
     
      </Router>
    );

    const Example = () => <p>Example Komponente</p>;
  
    return ( appStructure );
}

export default App;
