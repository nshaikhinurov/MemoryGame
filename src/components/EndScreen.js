import React from 'react';
import './EndScreen.less';

var EndScreen = React.createClass({
  render() {
    return (
      <div data-tid="App" className="end-screen">
        <div className="img" />
        <h1 className="header">
          Поздравляем!<br />
          Ваш итоговый счет: {this.props.score}
        </h1>
        <button
          data-tid="EndGame-retryGame"
          className="button"
          onClick={this.props.onRestart}
        >
          Еще раз
        </button>
      </div>
    );
  }
});

EndScreen.propTypes = {
  score: React.PropTypes.number.isRequired,
  onRestart: React.PropTypes.func.isRequired
};

export default EndScreen;
