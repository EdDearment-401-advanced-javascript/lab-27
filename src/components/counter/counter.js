import React from 'react';
/**
 * The Counter Component
 * @class Counter
 * @extends {React.Component}
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  /**
   *
   *Handles the event if the up button is pressed
   * @memberof Counter
   */
  handleUp = (e) => {
    e.preventDefault();
    const count = this.state.count + 1;
    this.updateCounter(count);
  };

  /**
   *
   * Handles the event if the down button is pressed
   * @memberof Counter
   */
  handleDown = (e) => {
    e.preventDefault();
    const count = this.state.count - 1;
    this.updateCounter(count);
  };

  /**
   *
   * Up dates whether or not if the number displayed is positive or negative
   * @param {*} count
   * @memberof Counter
   */
  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

  /**
   *
   * Renders the buttons to the page
   * @returns
   * @memberof Counter
   */
  render() {
    const classes = ['count', this.state.polarity].join(' ');
    return (
      <section className="counter">
      {/* eslint-disable-next-line */}
        <a href="#" className="down clicker" onClick={this.handleDown}>
          -
        </a>
        {/* eslint-disable-next-line */}
        <span className={classes}>{this.state.count}</span>
        {/* eslint-disable-next-line */}
        <a href="#" className="up clicker" onClick={this.handleUp}>
          +
        </a>
      </section>
    );
  }
}

export default Counter;
