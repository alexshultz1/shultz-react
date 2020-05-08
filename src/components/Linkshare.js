import React from 'react';
import Card from './Card.js';
import '../App.css';

class Linkshare extends React.Component {
  render() {
    const body = (
        <div className="LinkshareBody">
          LinkShare
        </div>
    );
    return (
        <div className="LinkshareWrapper">
          <Card body={body}/>
        </div>
    );
  }
}

export default Linkshare;
