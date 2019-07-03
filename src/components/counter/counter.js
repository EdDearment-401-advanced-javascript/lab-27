import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = (e) => {
    console.log(e);
    const count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = (e) => {
    console.log(e);
    const count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  }

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
