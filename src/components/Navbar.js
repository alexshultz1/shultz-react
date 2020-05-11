import React from 'react';
import '../App.css';
import VideoOptions from './VideoOptions';
import LoadPrevious from "./LoadPrevious";

class Navbar extends React.Component {
  render() {
    return <div className="Navbar Card">
      <div className="Title">
        SHULTZ-CAST
      </div>
      <VideoOptions/>
      <LoadPrevious/>
    </div>
  }
}

export default Navbar;
