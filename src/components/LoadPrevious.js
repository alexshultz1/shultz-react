import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { loadPreviousSession } from '../actions';


class LoadPrevious extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'placeholder' };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoadPreviousSession = this.handleLoadPreviousSession.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  handleLoadPreviousSession() {
    this.props.loadPreviousSession(this.state.value);
    this.setState({ value: 'placeholder' });
  }

  archivedSessionOptions() {
    return this.props.archivedSessions.map((oldSess) => {
      return (
        <option value={oldSess.id} key={oldSess.id}>
          {oldSess.videoId + '   ------   Last modified: ' + oldSess.lastModified.toLocaleTimeString()}
        </option>
      )
    });
  }

  render() {
    return (
      <div className="LoadPrevious">
        Previous Sessions
        <select value={this.state.value}
                disabled={this.props.archivedSessions.length < 1}
                onChange={this.handleChange}>
          <option value="placeholder" disabled>Choose a previous session to load</option>
          {this.archivedSessionOptions()}
        </select>
        <button disabled={this.state.value === 'placeholder'}
                onClick={this.handleLoadPreviousSession}>
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
    { loadPreviousSession }
)(LoadPrevious)
