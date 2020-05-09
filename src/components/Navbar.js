import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { startNewSession } from '../actions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      youtubeVideoId: this.props.videoId,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStartNewSession = this.handleStartNewSession.bind(this);
  }

  handleChange(e) {
    this.setState({ youtubeVideoId: e.target.value });
  }

  handleStartNewSession() {
    this.props.startNewSession(this.state.youtubeVideoId);

    this.setState({ youtubeVideoId: 'szFLA4_pwew' });
  }

  render() {
    return <div className="Navbar Card">
      YouTube Video ID:
      <input type="text"
             value={ this.state.youtubeVideoId }
             onChange={ this.handleChange }
             className="YoutubeInput"/>
      <button onClick={ this.handleStartNewSession }>
        Start new session
      </button>
    </div>
  }
}


const mapStateToProps = state => {
  return state.currentSession;
};

export default connect(
    mapStateToProps,
    { startNewSession }
)(Navbar)
