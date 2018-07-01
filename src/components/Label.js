import React from 'react';

import './Label.less';

var Label = React.createClass({
  propTypes: {
    suit: React.PropTypes.string.isRequired,
    rank: React.PropTypes.string.isRequired
  },

  render() {
    const { className, suit, rank } = this.props;
    var color;
    // digits are displayed smaller in Verlag font by default, so we'll fix it
    var isNumeric = !isNaN(rank); // not Number.isNaN because rank is a string

    switch (suit) {
      case 'heart':
      case 'diamond':
        color = 'red';
        break;
      case 'spade':
      case 'club':
        color = 'black';
        break;
    }

    return (
      <div className={className}>
        <div className={`rank ${color} ${isNumeric ? 'isNumeric' : ''}`}>
          {rank}
        </div>
        <div className={`shape ${suit}`} />
      </div>
    );
  }
});

export default Label;
