import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

interface IProps {}

interface IState {
  count: number;
}

export default class Counter extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleReset = () => {
    this.setState({
      count: 0,
    });
  };

  render() {
    return (
      <View>
        <Text testID="count">{this.state.count}</Text>
        <Button
          testID="increment"
          title="Increment"
          onPress={this.handleIncrement}
        />
        <Button
          testID="decrement"
          title="Decrement"
          onPress={this.handleDecrement}
        />
        <Button testID="reset" title="Reset" onPress={this.handleReset} />
      </View>
    );
  }
}
