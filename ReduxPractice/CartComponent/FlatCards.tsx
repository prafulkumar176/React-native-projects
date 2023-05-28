/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';
import {
  DecreaseCount,
  IncreaseCount,
  addtocart,
} from '../components/Redux/Action/actionType';
import data from './config.json';

interface IProps {
  title: string;
  id: number;
  image: string;
  description: string;
  price: string;
  product_count: number;
  DecreaseCount: any;
  IncreaseCount: any;
  AddToCart: any;
  quantity: any;
  product_data: any;
  ApiCall: any;
}

interface IState {
  isCartPressed: boolean;
}
class FlatCards extends Component<IProps, IState> {
  state: IState = {
    isCartPressed: false,
  };

  constructor(props: IProps) {
    super(props);
  }

  handleAddToCart = (id: any) => {
    this.setState({isCartPressed: !this.state.isCartPressed});
    let item = data.products.find((v: any) => v.id === id);

    if (item) {
      this.props.AddToCart(item);
    }

    // let updatedQuantity = data.products.forEach(v => {
    //   if (v.id === id) {
    //     v.quantity = v.quantity + 1;
    //   }
    //   return v.quantity;
    // });
    // console.log(updatedQuantity, 'sfndshfhf');

    // if (item?.id !== id) {
    //   Alert.alert('Alread there in the cart');
    // } else {
    //   this.props.addtocart({
    //     id: item?.id,
    //     title: item?.title,
    //     price: item?.price,
    //     quantity: item?.quantity,
    //     thumail: item?.thumbnail,
    //   });
    // }
  };
  // handleIncrement = (id: number, price: string, quantity: any) => {
  //   console.log(id, quantity, price);
  //   let match = data.products && data.products.find(v => v.id === id);
  //   console.log(match, 'match');

  //   let updatedQuantity = data.products.forEach(v => {
  //     if (v.id === id) {
  //       v.quantity = v.quantity + 1;
  //     }
  //     return v.quantity;
  //   });
  //   this.props.AddToCart(updatedQuantity);
  // };

  // handleDecrement = (id: number, price: any, quantity: any) => {
  //   console.log(id, quantity, price);
  //   let match = data.products && data.products.find(v => v.id === id);

  //   if (match?.quantity === quantity) {
  //     this.props.DecreaseCount(quantity);
  //   } else {
  //     this.props.DecreaseCount(0);
  //   }
  // };

  handleCartCount = (id: any, type: string) => {
    if (type === 'increment') {
      this.props.IncreaseCount(id);
    } else if (type === 'decrement') {
      this.props.DecreaseCount(id);
    }
  };

  render() {
    const {title, description, image, price, id} = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.images}
        />
        <View style={styles.mainContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardPrice}> $ {price}</Text>
          <Text style={styles.cardDescription}>{description}</Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
              alignItems: 'center',
            }}>
            <Text style={styles.cardFooter}>33 mintues agoo</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderWidth: 1,
                borderColor: 'white',
                padding: 5,
                width: 120,
              }}>
              <View>
                {this.state.isCartPressed ? (
                  ''
                ) : (
                  <TouchableOpacity onPress={() => this.handleAddToCart(id)}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>
                      Add To Cart
                    </Text>
                  </TouchableOpacity>
                )}
                {this.state.isCartPressed ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 100,
                    }}>
                    <TouchableOpacity
                      onPress={() => this.handleCartCount(id, 'decrement')}>
                      <Text style={styles.textAdd}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.cardTitle}>
                      {this.props.product_data.length === 0
                        ? 0
                        : this.props.product_data &&
                          this.props.product_data.find(
                            (v: any) => v.product_id === id,
                          ).product_quantity}
                    </Text>

                    <TouchableOpacity
                      onPress={() => this.handleCartCount(id, 'increment')}>
                      <Text style={styles.textAdd}>+</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  ''
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  const product_data = state.AddToCart;
  // console.log(product_data);

  return {
    product_data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  IncreaseCount: (payload: any) => dispatch(IncreaseCount(payload)),
  DecreaseCount: (payload: any) => dispatch(DecreaseCount(payload)),
  AddToCart: (payload: any) => dispatch(addtocart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatCards);
