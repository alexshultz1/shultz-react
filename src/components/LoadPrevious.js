import React from 'react';
import '../App.css';
import { connect } from 'react-redux'

class LoadPrevious extends React.Component {
  archivedSessionOptions() {
    return this.props.archivedSessions.map((oldSess) => {
      return (
          <option value={oldSess.id} key={oldSess.id}>
            {oldSess.videoId + ' ' + oldSess.sessionStart.toLocaleTimeString() + ' - ' + oldSess.sessionEnd.toLocaleTimeString()}
          </option>
      )
    });
  }

  render() {
    return (
      <div className="LoadPrevious">
        Previous Sessions
        <select disabled={this.props.archivedSessions.length < 1}>
          <option value="" disabled selected>Choose a previous session to load</option>
          {this.archivedSessionOptions()}
        </select>
        <button disabled={this.props.archivedSessions.length < 1}>
          Load Previous Session
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    archivedSessions: state.archivedSessions,
  }
};

export default connect(
    mapStateToProps,
)(LoadPrevious)
