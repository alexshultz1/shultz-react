import React from 'react';
import Navbar from './components/Navbar.js';
import Player from './components/Player.js';
import Notepad from './components/Notepad.js';
import './App.css';
import Linkshare from "./components/Linkshare";

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <Navbar/>
          <div className="Body" id="body">
            <div className="LeftSide">
              <Player/>
              <Linkshare/>
            </div>
            <Notepad/>
          </div>
        </div>
    );
  }
}

export default App;
