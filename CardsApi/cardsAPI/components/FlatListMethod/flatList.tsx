/* eslint-disable react-native/no-inline-styles */

import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import {Data} from './data';

interface IProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
}
interface IState {
  products: any[];
  categorypart: any[];
  selectedItem: string;
  newArr: any[];
}
interface IItems {
  item: any[];
}
// const Item = ({title}: ItemProps) => (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
export class FlatListCards extends Component<IProps, IState, IItems> {
  state: IState = {
    products: [],
    categorypart: [],
    selectedItem: '',
    newArr: [],
  };
  componentDidMount(): void {
    fetch('https://dummyjson.com/products')
      .then(res => {
        return res.json();
      })
      .then(response => {
        this.setState({products: response.products});
        this.setState({newArr: response.products});
      });
    let category = this.state.products.map((cat: any) => {
      return cat.category;
    });
    this.setState({categorypart: [...category, category]});
  }

  handleInput = (e: any) => {
    let data = this.state.newArr.filter(v => {
      return v.title.toLowerCase().includes(e);
    });
    this.setState({products: data});
  };

  handleFilter = () => {
    let filter = this.state.newArr.filter((v: any) => {
      return v.category === this.state.selectedItem;
    });
    this.setState({products: filter});
  };

  render() {
    console.log(this.state.selectedItem);
    return (
      <View>
        <View style={styles.containerItem}>
          <View>
            <TextInput
              placeholder="Search..."
              style={styles.input}
              onChangeText={this.handleInput}
            />
          </View>
          <View style={styles.selected}>
            <SelectDropdown
              buttonStyle={{width: 100, height: 40}}
              data={[
                'smartphones',
                'laptops',
                'fragrances',
                'skincare',
                'groceries',
                'home-decoration',
              ]}
              defaultValue="Category"
              onSelect={selectedItem => {
                this.setState({selectedItem: selectedItem});
                this.handleFilter();
              }}
            />
          </View>
        </View>

        <FlatList
          data={this.state.products}
          renderItem={v => (
            <Data
              id={v.item.id}
              thumbnail={v.item.thumbnail}
              title={v.item.title}
              description={v.item.description}
              price={v.item.price}
              rating={v.item.rating}
              stock={v.item.stock}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    // flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    padding: 5,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000',
    width: '100%',
    height: 200,
    marginVertical: 0,
  },
  image: {
    width: '40%',
    height: '100%',
    padding: 5,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  insideItems: {
    padding: 10,
  },
  productName: {
    letterSpacing: 0.25,
    textTransform: 'uppercase',
    fontSize: 18,
    color: '#4a5568',
    fontWeight: '700',
    width: '75%',
  },
  description: {
    textAlign: 'left',
    color: '#4a5568',
    fontSize: 15,
    marginVertical: 2,
    // width: '100%',
    minWidth: '74%',
    maxWidth: '50%',
  },
  price: {
    fontSize: 27,
    color: '#1a202c',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
    position: 'relative',
    right: 6,
    width: '80%',
  },
  footerText: {
    marginHorizontal: 15,
  },
  ratings: {
    // paddingHorizontal: 5,
    color: '#1a202c',
    fontWeight: 'bold',
    // borderWidth: 1,
    marginHorizontal: 5,
  },
  header: {
    marginHorizontal: 12,
  },
  input: {
    height: 40,
    // margin: 12,
    width: 250,
    borderWidth: 1,
    padding: 10,
  },
  selected: {
    marginLeft: 20,
    width: 100,
  },
});
