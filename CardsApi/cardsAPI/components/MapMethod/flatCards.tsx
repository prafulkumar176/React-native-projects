/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import {Icon} from 'react-native-vector-icons/Icon';
import React, {Component} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
// import {useDataName} from '../ContextApi/context';

interface IProps {}
interface IState {
  products: any[];
  categorypart: any[];
  selectedItem: string;
  newArr: any[];
}
// let {name} = useContext(useDataName);

export class FlatCardsTools extends Component<IProps, IState> {
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
    // console.log(name);
    return (
      <View>
        <ScrollView>
          <View style={styles.topbar}>
            <View style={styles.headerPart}>
              <Image
                source={{
                  uri: 'https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg',
                }}
                style={styles.profilePic}
              />
              <Text>Hello John</Text>
            </View>
          </View>

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

          {this.state.products &&
            this.state.products.map(
              ({
                id,
                title,
                description,
                price,
                rating,
                stock,
                thumbnail,
                discountPercentage,
              }: any) => {
                return (
                  <View style={styles.container} key={id}>
                    <View style={styles.card}>
                      <Image
                        style={styles.image}
                        source={{
                          uri: `${thumbnail}`,
                        }}
                      />
                      <View style={styles.insideItems}>
                        <View style={styles.header}>
                          <Text style={styles.productName} numberOfLines={2}>
                            {title}
                          </Text>
                          <Text style={styles.description} numberOfLines={2}>
                            {description}
                          </Text>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Text style={styles.price}>${price}</Text>
                            <Text style={styles.discount}>
                              {' '}
                              Upto ${discountPercentage}% off
                            </Text>
                          </View>
                        </View>

                        <View style={styles.footer}>
                          <View style={styles.footerText}>
                            <Text style={styles.ratings}>{rating}</Text>
                            <Text>Ratings</Text>
                          </View>

                          <View style={styles.footerText}>
                            <Text style={styles.ratings}>{stock}</Text>
                            <Text>Stock</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                );
              },
            )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    // alignItems: 'center',
  },
  headerPart: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    // borderWidth: 1,
    alignItems: 'center',
    padding: 5,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 80 / 2,
    marginRight: 6,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 12,
    backgroundColor: '#000000',
  },
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    padding: 12,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#000',
    width: '100%',
    height: 200,
    marginVertical: 0,
    padding: 2,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.6,
    // shadowRadius: 2,
    // elevation: 6,
  },
  image: {
    width: '40%',
    height: '90%',
    padding: 5,
    borderRadius: 5,
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 9,
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
    minWidth: '66%',
    maxWidth: '50%',
    // borderWidth: 1,
  },
  price: {
    fontSize: 27,
    color: '#1a202c',
    fontWeight: 'bold',
    marginVertical: 2,
  },
  discount: {
    fontSize: 12,
    marginTop: 6,
    marginLeft: 5,
    backgroundColor: '#CC0C39',
    color: '#ffffff',
    padding: 3,
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
    marginHorizontal: 18,
  },
  ratings: {
    color: '#1a202c',
    fontWeight: 'bold',
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
    backgroundColor: '#FFFFFF',
  },
  selected: {
    marginLeft: 20,
    width: 100,
  },
});
