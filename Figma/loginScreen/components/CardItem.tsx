import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface IProps {
  id: number;
  name: string;
  image: string;
}

export default class CardItem extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <View style={styles.cardsContainer}>
        <Image
          source={{
            uri: `${this.props.image}`,
          }}
          style={styles.images}
        />
        <Text style={styles.shoeNameText}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 15,
    justifyContent: 'row',
  },
  imagepart: {
    height: 100,
    width: 100,
    marginHorizontal: 10,
    // marginLeft: 20,
    backgroundColor: '#F6F8FC',
  },
  shoeimage: {
    height: 300,
    width: '100%',
    backgroundColor: 'white',
    color: 'white',
  },
  headertext: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  yeartext: {
    fontSize: 50,
    color: 'black',
  },
  insideText: {
    marginHorizontal: 15,
  },
  dollar: {
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
  },
  menuicon: {
    borderWidth: 1,
    width: 25,
    marginLeft: 18,
    marginTop: 15,
  },
  favText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 15,
    marginTop: 10,
  },
  images: {
    height: 120,
    width: 120,
    borderRadius: 5,
  },
  cardsContainer: {
    marginLeft: 15,
    marginTop: 10,
  },
  shoeNameText: {
    // marginHorizontal: 10,
    marginVertical: 10,
    color: 'black',
    fontSize: 16,
  },
});
