import React from 'react';
import Navbar from './components/Navbar.js';
import AppBody from "./components/AppBody";
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Navbar/>
          <AppBody/>
        </div>
    );
  }
}

export default App;
