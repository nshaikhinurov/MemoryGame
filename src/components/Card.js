import React from 'react';
import CardFlip from './CardFlip';
import './Card.less';
import Label from './Label';

var Card = React.createClass({
  getInitialState() {
    return {
      isFlipped: false
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.gameId != this.props.gameId) {
      this.props.onReady(this.flip.bind(this));
      this.setState(this.getInitialState());
    }
  },

  componentDidMount() {
    this.props.onReady(this.flip.bind(this));
  },

  flip() {
    this.setState({ isFlipped: !this.state.isFlipped });
  },

  render() {
    if (!this.props.isVisible) {
      return <div className="card invisible" />;
    }

    return (
      <div>
        <CardFlip isFlipped={this.state.isFlipped}>
          <div
            data-tid="Card"
            className="card shadow face-down"
            key="front"
            onClick={this.props.onClick}
          >
            <div className="dice" />
          </div>

          <div
            data-tid="Card-flipped"
            className="card shadow"
            key="back"
            onClick={this.props.onClick}
          >
            <Label
              className="label"
              suit={this.props.suit}
              rank={this.props.rank}
            />
            <Label
              className="label label-inverted"
              suit={this.props.suit}
              rank={this.props.rank}
            />
          </div>
        </CardFlip>
      </div>
    );
  }
});

Card.propTypes = {
  rank: React.PropTypes.string.isRequired,
  suit: React.PropTypes.string.isRequired,
  isVisible: React.PropTypes.bool.isRequired,
  onReady: React.PropTypes.func.isRequired,
  onClick: React.PropTypes.func.isRequired
};

Card.defaultProps = {
  rank: 'A',
  suit: 'diamond',
  isVisible: true,
  onReady() {},
  onClick() {}
};

export default Card;
