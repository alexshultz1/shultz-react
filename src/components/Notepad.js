import React from 'react';
import Card from './Card.js';
import '../App.css';

class Notepad extends React.Component {
  render() {
    const body = (
          <div className="NotepadBody">
            NotePad
          </div>
        );
    return (
        <div className="NotepadWrapper">
          <Card body={body}/>
        </div>
    );
  }
}

export default Notepad;
