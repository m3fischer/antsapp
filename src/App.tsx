import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate, redirect, Link  } from 'react-router-dom';

import './App.css';
import { Qrreader } from './qrreader/Qrreader'
import { Settings } from './settings/Settings';
import { Home } from './home/home';
import Navigation from './navigation';
import Footer from './footer/Footer'

function App() {
  let appStructure = 
     (
      <>
        <Navigation/>       
        <Router>
          <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/setting" element= {<Settings/>} /> 
            <Route path="/qrreader" element= {<Qrreader/>} />
            <Route path="*" element= {<h1>Schade, das hat nicht geklappt</h1>} />
          </Routes>
        </Router>
        <Footer/>
      </>
    );
  
    return ( appStructure );
}

export default App;

function doSomthingOnClick(){
  console.log("umleitung ein")
  
}



// let defaultprop:any = 
// (<div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.tsx</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Lerne React
//     </a>
//     <Qrreader />

//   </header>
// </div>

// );