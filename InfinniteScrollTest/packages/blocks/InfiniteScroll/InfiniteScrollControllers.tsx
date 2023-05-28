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
    try{
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
    }catch(err){
      console.log(err);
      
    }
    
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
