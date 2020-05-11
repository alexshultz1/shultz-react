import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { startNewSession } from '../actions';

class VideoOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      youtubeVideoId: this.props.videoId,
      presets: [
        {
          label: 'Cooking',
          id: 'ru4U_T83uOU',
        },
        {
          label: 'Coding React',
          id: 'sBws8MSXN7A',
        },
        {
          label: "Solve a Rubik's Cube",
          id: 'R-R0KrXvWbc',
        },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleStartNewSession = this.handleStartNewSession.bind(this);
  }

  handleChange(e) {
    this.setState({ youtubeVideoId: e.target.value });
  }

  handleStartNewSession(videoId) {
    this.props.startNewSession(videoId);
    setTimeout(() => this.setState({ youtubeVideoId: this.props.videoId }), 0);
  }

  buttonPresets() {
    return this.state.presets.map(({ label, id }) => {
      return (
          <button key={id}
                  onClick={ this.handleStartNewSession.bind(this, id)}
                  className={this.props.videoId === id ? 'Preset Selected' : 'Preset'}>
            {label}
          </button>
      );
    });
  }

  render() {
    return (
      <div className="Options">
        Start a session with one of these topics:
        <div className="Presets">
          {this.buttonPresets()}
        </div>
        <div className="CustomInput">
          <span className="Info">Or, enter a valid Youtube video ID and start your own session:</span>
          <div className="InputPair">
            <input type="text"
                   value={ this.state.youtubeVideoId }
                   onChange={ this.handleChange }
                   className="YoutubeInput"/>
            <button onClick={ this.handleStartNewSession.bind(this, this.state.youtubeVideoId) }
                    disabled={ this.props.videoId === this.state.youtubeVideoId }>
              Start new session
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    videoId: state.currentSession.videoId,
  }
};

export default connect(
    mapStateToProps,
    { startNewSession }
)(VideoOptions)
