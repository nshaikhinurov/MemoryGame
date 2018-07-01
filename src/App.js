import React from 'react';

import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';
import deck from './deck.json';

const App = React.createClass({
  getInitialState() {
    return {
      screen: 'start'
    };
  },

  prepareCards() {
    // Fisher–Yates Shuffle
    function shuffle(array) {
      var m = array.length,
        t,
        i;

      // While there remain elements to shuffle…
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    function getRank(char) {
      if (char == '0') return '10';
      return char;
    }

    function getSuit(char) {
      switch (char) {
        case 'H':
          return 'heart';
        case 'D':
          return 'diamond';
        case 'S':
          return 'spade';
        case 'C':
          return 'club';
      }
    }

    var nineRandomCards = shuffle(deck).slice(0, 9);
    var set = shuffle(nineRandomCards.concat(nineRandomCards));
    this.cards = set.map(card => {
      return {
        rank: getRank(card[0]),
        suit: getSuit(card[1]),
        visible: true
      };
    });
  },

  componentDidMount() {
    this.gameId = 0;
  },

  handleStart() {
    this.prepareCards();
    this.gameId++;
    this.setState({ screen: 'game' });
  },

  handleEnd(score) {
    this.score = score;
    this.setState({ screen: 'end' });
  },

  render() {
    switch (this.state.screen) {
      case 'start':
        return <StartScreen onStart={this.handleStart} />;
      case 'game':
        return (
          <GameScreen
            onPlayAgainClick={this.handleStart}
            cards={this.cards}
            gameId={this.gameId}
            onEnd={this.handleEnd}
          />
        );
      case 'end':
        return <EndScreen score={this.score} onRestart={this.handleStart} />;
    }
  }
});

export default App;
