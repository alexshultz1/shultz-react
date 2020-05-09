import React from 'react';
import '../App.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      youtubeLink: 'https://www.youtube.com/watch?v=ru4U_T83uOU'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ youtubeLink: e.target.value });
  }

  render() {
    return <div className="Navbar Card">
      YouTube Link:
      <input type="text"
             value={ this.state.youtubeLink }
             onChange={ this.handleChange }
             className="YoutubeInput"/>
      <button onClick={ () => console.log('new youtube link:', this.state.youtubeLink) }>
        Start new session
      </button>
    </div>
  }
}

export default Navbar;
