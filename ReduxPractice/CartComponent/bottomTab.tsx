import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import Products from './Products';
import Cart from './Cart';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

const Tab = createBottomTabNavigator();

interface IProps {
  data: any;
}

const products = {
  title: 'Products',
  tabBarIcon: () => {
    return <AntDesign name="home" size={25} color="blue" />;
  },
};

class BottomTab extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const productsCart = {
      title: 'Cart',
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: () => {
        return <AntDesign name="shoppingcart" size={25} color="blue" />;
      },
      tabBarBadge: this.props.data,
    };
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Product" component={Products} options={products} />
        <Tab.Screen name="Cart" component={Cart} options={productsCart} />
      </Tab.Navigator>
    );
  }
}

const mapStateToProps = (state: any) => {
  const data = state.AddToCart.length;
  // console.log(data);
  return {
    data: data,
  };
};

export default connect(mapStateToProps)(BottomTab);
