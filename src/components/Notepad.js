import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { addNote } from '../actions';

class Notepad extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      event.preventDefault();
      const textArea = document.getElementById('notepadTextarea');
      this.props.addNote(textArea.value);
      textArea.value = '';
    }
  }

  notes() {
    return this.props.notes.map((note) => {
      return (
          <div className="Note" key={note.noteTime.toISOString()}>
            <div className="NoteText">
              {note.noteText}
            </div>
            <div className="NoteTime">
              {note.noteTime.toLocaleTimeString()}
            </div>
          </div>
      )
    });
  }

  render() {
    return (
      <div className="Notepad Card">
        <div className="Header Card">
          Notepad
          <div className="NotepadInfo">
            Type your notes along with the video. If you start a new session, your notes will be saved in the archive.
          </div>
        </div>
        <div className="Notes">
          {this.notes()}
        </div>
        <div className="NotepadInput">
          <textarea id="notepadTextarea"
                    placeholder="Type notes here. Press enter to add note"
                    onKeyPress={this.handleKeyPress}>
          </textarea>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.currentSession.notes,
  }
};

export default connect(
    mapStateToProps,
    { addNote }
)(Notepad);
