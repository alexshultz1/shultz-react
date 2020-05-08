import React from 'react';
import '../App.css';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iFrameHeight: 315,
      iFrameWidth: 560,
    };
    this.myRef = React.createRef();
    this.handleResize = this.handleResize.bind(this);
    window.addEventListener('resize', this.handleResize);
  }

  componentDidMount() {
    this.handleResize();
  }

  handleResize() {
    if (this.myRef.current) {
      this.setState({
        iFrameHeight: this.myRef.current.clientHeight,
        iFrameWidth: this.myRef.current.clientWidth,
      })
    }
  }

  render() {
    return (
      <div className="PlayerWrapper" ref={this.myRef}>
        <ReactIFrame width={this.state.iFrameWidth} height={this.state.iFrameHeight} src="https://www.youtube.com/embed/ru4U_T83uOU?start=65"/>
      </div>
    );
  }
}

class ReactIFrame extends React.Component {
  render() {
    return(
        <iframe src={this.props.src} height={this.props.height} width={this.props.width} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
  }
}

export default Player;
