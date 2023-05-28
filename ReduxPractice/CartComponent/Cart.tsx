/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';
import {removeItem} from '../components/Redux/Action/actionType';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface IProps {
  countReducer: any;
  AddToCart: any;
  product_count: any;
  product_data: any;
  addtocart: any;
  cartItem: any;
  product_totalPrice: any;
  removeItem: any;
  price: any;
}

class Cart extends Component<IProps> {
  handleDelete = (id: any) => {
    this.props.removeItem(id);
  };

  render() {
    return (
      <View
        style={{height: this.props.product_data.length == 0 ? '100%' : '100%'}}>
        <Text style={styles.textHeader}>Cart List</Text>
        {this.props.product_data.length === 0 && (
          <Text
            style={{
              color: 'black',
              marginLeft: 20,
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            NO PRODUCTS IN THE CART
          </Text>
        )}
        <ScrollView style={{marginBottom: 10}}>
          {this.props?.product_data?.map((v: any) => {
            let quantity = v['product_quantity'];
            v = v['product_data'];
            return (
              <View style={styles.container} key={v?.id}>
                <Image
                  source={{
                    uri: v?.thumbnail,
                  }}
                  style={styles.images}
                />
                <View
                  style={[
                    styles.mainContainer,
                    {flexDirection: 'row', justifyContent: 'space-between'},
                  ]}>
                  <View>
                    <Text style={styles.cardTitle}>{v?.title}</Text>
                    <Text style={styles.cardPrice}> $ {v?.price}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                      marginTop: 15,
                      width: 150,
                    }}>
                    <TouchableOpacity>
                      <Text style={styles.textAdd}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.cardTitle}>{quantity}</Text>

                    <TouchableOpacity>
                      <Text style={styles.textAdd}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{marginTop: 5, marginLeft: 10}}
                      onPress={() => this.handleDelete(v.id)}>
                      <AntDesign name="delete" size={20} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View
          style={{
            backgroundColor: 'black',
            position: 'absolute',
            bottom: this.props.product_data.length == 0 ? 0 : 0,
            width: '100%',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: 'white', textAlign: 'left', fontSize: 20}}>
            SubPrice :{' '}
            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 22}}>
              {/* {this.props.product_data.price ? this.props.product_data.price} */}
              {this.props.price ? this.props.price : 0}
            </Text>
          </Text>

          <Text style={{color: 'white', textAlign: 'left', fontSize: 20}}>
            Items :{' '}
            <Text style={{color: 'green', fontWeight: 'bold', fontSize: 22}}>
              {this.props.product_data?.length}
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  const product_data = state.AddToCart;
  const price = state.AddToCart.map((v: any) => v.product_data.price).reduce(
    (acc: any, cur: any) => acc + cur,
  );

  return {
    product_data: product_data,
    price: price,
    // product_totalPrice: product_totalPrice,

    // product_count: product_count,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  removeItem: (payload: any) => dispatch(removeItem(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
