import React from 'react';

import './GameScreen.less';
import Card from './Card';

const GameScreen = React.createClass({
  getInitialState() {
    return {
      score: 0,
      isPlaying: false
    };
  },

  componentDidMount() {
    this.startGame();
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameId != this.props.gameId) {
      this.setState(this.getInitialState());
    }
  },

  componentDidUpdate: function(prevProps) {
    if (prevProps.gameId != this.props.gameId) {
      this.startGame();
    }
  },

  startGame() {
    this.playNewGameAnimation();
    this.openedPairs = 0;
    this.card1 = this.card2 = null;
    setTimeout(() => this.setState({ score: 0, isPlaying: true }), 5600);
  },

  playNewGameAnimation() {
    this.props.cards.forEach(card => card.flip());
    setTimeout(() => {
      this.props.cards.forEach(card => card.flip());
    }, 5600);
  },

  checkPair(card1, card2) {
    return card1.rank == card2.rank && card1.suit == card2.suit;
  },

  handleCardClick(id) {
    if (!this.state.isPlaying) return;
    var card = this.props.cards[id];
    if (card.isFacedUp) return;
    this.flipCard(card);
    // seems simpler to use timeouts instead of using transitionEnd events
    setTimeout(this.handleCardFlip.bind(this, card), 600);
  },

  flipCard(card) {
    card.isFacedUp = !card.isFacedUp;
    card.flip();
  },

  LinkFlipFunc(id, f) {
    var card = this.props.cards[id];
    card.flip = f;
    card.isFacedUp = false;
  },

  handleCardFlip(card) {
    if (!this.card1) {
      this.card1 = card;
    } else {
      this.card2 = card;
      if (this.checkPair(this.card1, this.card2)) {
        this.openedPairs++;
        if (this.openedPairs == 9) {
          return this.props.onEnd(this.state.score);
        }
        this.card1.visible = this.card2.visible = false;
        this.setState({
          score: this.state.score + (9 - this.openedPairs) * 42
        });
        // TODO: remove cards smoothly
      } else {
        this.setState({
          score: this.state.score - this.openedPairs * 42
        });

        this.flipCard(this.card1);
        this.flipCard(this.card2);
      }
      this.card1 = this.card2 = null;
    }
  },

  render() {
    var i = 0;

    return (
      <div data-tid="Deck" className="grid">
        <div
          className="score-bar"
          style={{ visibility: this.state.isPlaying ? 'visible' : 'hidden' }}
        >
          <span
            data-tid="Menu-newGame"
            onClick={this.props.onPlayAgainClick}
            className="play-again"
          >
            Начать заново
          </span>
          <span>
            Очки: <span data-tid="Menu-scores">{this.state.score}</span>
          </span>
        </div>
        {this.props.cards.map(card => {
          return (
            <Card
              rank={card.rank}
              suit={card.suit}
              isVisible={card.visible}
              onReady={this.LinkFlipFunc.bind(null, i)}
              onClick={this.handleCardClick.bind(null, i)}
              gameId={this.props.gameId}
              key={i++}
            />
          );
        })}
      </div>
    );
  }
});

GameScreen.propTypes = {
  cards: React.PropTypes.array.isRequired,
  onPlayAgainClick: React.PropTypes.func.isRequired,
  onEnd: React.PropTypes.func.isRequired
};

export default GameScreen;
