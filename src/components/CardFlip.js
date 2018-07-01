import React from 'react';

const ReactCardFlip = React.createClass({
  getInitialState() {
    return {
      isFlipped: this.props.isFlipped,
      rotation: 0
    };
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.isFlipped !== this.props.isFlipped) {
      this.setState({ isFlipped: nextProps.isFlipped });
      this.setState({ rotation: this.state.rotation + 180 });
    }
  },

  getComponent(key) {
    return this.props.children.filter(component => {
      return component.key === key;
    });
  },

  render() {
    const styles = {
      container: {
        perspective: '1000px',
        transformStyle: 'preserve-3d'
      },
      flipper: {
        position: 'relative',
        transform: `rotateY(${
          this.props.infinite ? this.state.rotation : 0
        }deg)`,
        transformStyle: 'preserve-3d',
        transition: `${this.props.flipSpeedBackToFront}s ease`
      },
      flipperFlip: {
        position: 'relative',
        transform: `rotateY(${
          this.props.infinite ? this.state.rotation : 180
        }deg)`,
        transformStyle: 'preserve-3d',
        transition: `${this.props.flipSpeedFrontToBack}s ease`
      },
      front: {
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        left: '0',
        position: 'absolute',
        top: '0',
        transform: 'rotateY(0deg)',
        transformStyle: 'preserve-3d',
        width: '100%',
        zIndex: '2',
        ...this.props.cardStyles.front
      },
      back: {
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        left: '0',
        position: 'absolute',
        transform: 'rotateY(180deg)',
        transformStyle: 'preserve-3d',
        top: '0',
        width: '100%',
        ...this.props.cardStyles.back
      }
    };

    return (
      <div className="react-card-flip" style={styles.container}>
        <div
          className="react-card-flipper"
          style={this.state.isFlipped ? styles.flipperFlip : styles.flipper}
        >
          <div className="react-card-front" style={styles.front}>
            {this.getComponent('front')}
          </div>

          <div className="react-card-back" style={styles.back}>
            {this.getComponent('back')}
          </div>
        </div>
      </div>
    );
  }
});

ReactCardFlip.propTypes = {
  cardStyles: React.PropTypes.shape({
    front: React.PropTypes.object,
    back: React.PropTypes.object
  }),
  children: (props, propName, componentName) => {
    if (React.Children.count(props[propName]) !== 2) {
      return new Error(`${componentName} requires two children.`);
    }
    return null;
  },
  flipSpeedBackToFront: React.PropTypes.number,
  flipSpeedFrontToBack: React.PropTypes.number,
  infinite: React.PropTypes.bool,
  isFlipped: React.PropTypes.bool
};

ReactCardFlip.defaultProps = {
  cardStyles: {
    front: {},
    back: {}
  },
  flipSpeedBackToFront: 0.6,
  flipSpeedFrontToBack: 0.6,
  infinite: false,
  isFlipped: false
};

export default ReactCardFlip;
