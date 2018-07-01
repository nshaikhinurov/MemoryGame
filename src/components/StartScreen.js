import React from 'react';
import './StartScreen.less';

var StartScreen = React.createClass({
  render() {
    return (
      <div className="start-screen">
        <div className="img" />
        <h1 className="header">Memory game</h1>
        <button
          data-tid="NewGame-startGame"
          className="button"
          onClick={this.props.onStart}
        >
          Начать игру
        </button>
      </div>
    );
  }
});

StartScreen.propTypes = {
  onStart: React.PropTypes.func.isRequired
};

export default StartScreen;
