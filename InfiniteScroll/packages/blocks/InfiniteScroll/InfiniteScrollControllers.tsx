/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

interface IState {
  passengersData: any[];
  count: number;
  isLoading: boolean;
}

interface IProps {
  data: any;
  selectedDate?: moment.Moment | Date | undefined;
}
export default class InfiniteScrollControllers extends Component<
  IProps,
  IState
> {
  constructor(props: IProps) {
    super(props);
  }

  state: IState = {
    passengersData: [],
    count: 10,
    isLoading: false,
  };
  componentDidMount(): void {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({isLoading: true});
    const response = await fetch(
      `https://api.instantwebtools.net/v1/passenger?page=0&size=${this.state.count}`,
    );
    const newData = await response.json();

    this.setState({
      passengersData: [...this.state.passengersData, {...newData}],
      count: this.state.count + 1,
      isLoading: false,
    });
  };
  renderFooter = () => {
    if (!this.state.isLoading) return null;
    return (
      <View style={{paddingVertical: 20}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  };
}
