import React from 'react';
import '../App.css';

class Card extends React.Component {
  render() {
    return (
        <div className="Card">
          {this.props.body}
        </div>
    );
  }
}

export default Card;
