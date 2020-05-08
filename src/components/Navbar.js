import React from 'react';
import Card from './Card.js';
import '../App.css';

class Navbar extends React.Component {
  render() {
    const body = (
          <div className="NavbarBody">
            Navigation Bar
          </div>
        );
    return (
        <div className="NavbarWrapper">
          <Card body={body}/>
        </div>
    );
  }
}

export default Navbar;
