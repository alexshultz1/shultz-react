import React from 'react';
import Player from './Player.js';
import Notepad from './Notepad.js';
import Linkshare from "./Linkshare";
import '../App.css';

class AppBody extends React.Component {
  render() {
    return (
        <div className="Body">
          <div className="LeftSide">
            <Player/>
            {/*<Linkshare/>*/}
          </div>
          <div className="RightSide">
            <Notepad/>
          </div>
        </div>
    );
  }
}

export default AppBody;
