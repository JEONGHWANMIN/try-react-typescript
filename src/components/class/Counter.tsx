import { Component } from 'react';

type CounterProps = {
  message: string;
};

type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };
  handleClick = () => {
    this.setState((PrevState) => {
      PrevState.count + 1;
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increments</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
