import React, {Component} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import data from './config.json';
import {styles} from './styles';
import FlatCards from './FlatCards';
import {connect} from 'react-redux';
import {ApiCall} from '../components/Redux/Action/actionType';

interface IState {
  data: any[];
}

interface IProps {
  product_count: number;
  product_data: any[];
  product_id: string;
  ApiCall: any;
  data: any;
}

class Products extends Component<IProps, IState> {
  render() {
    return (
      <View style={{marginBottom: 30}}>
        <Text style={[styles.textHeader, {padding: 15}]}>Products</Text>
        <TouchableOpacity
          onPress={() => this.props.data()}
          style={{padding: 15, backgroundColor: 'grey'}}>
          <Text style={{color: 'black', textAlign: 'center'}}>GET DATA</Text>
        </TouchableOpacity>

        <FlatList
          data={data.products}
          renderItem={({item}: any) => (
            <FlatCards
              title={item.title}
              id={item.id}
              image={item.thumbnail}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              product_count={0}
              ApiCall={undefined}
            />
          )}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state, 'heklsnfnsdnf');
  return {};
};

// const mapDispatchToProps = (dispatch: any) => {
//   const increaseCount = dispatch(() => IncreaseCount);
//   // console.log(increaseCount);
//   return {
//     increaseCount,
//   };
// };
const mapDispatchToProps = (dispatch: any) => ({
  data: () => dispatch(ApiCall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
