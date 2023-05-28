import {Image, StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

interface IProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
}

export class Data extends Component<IProps> {
  constructor(props: IProps) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <View style={styles.container} key={this.props.id}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={{
              uri: `${this.props.thumbnail}`,
            }}
          />
          <View style={styles.insideItems}>
            <View style={styles.header}>
              <Text style={styles.productName} numberOfLines={2}>
                {this.props.title}
              </Text>
              <Text style={styles.description} numberOfLines={2}>
                {this.props.description}
              </Text>
              <Text style={styles.price}>${this.props.price}</Text>
            </View>
            <View style={styles.footer}>
              <View style={styles.footerText}>
                <Text style={styles.ratings}>{this.props.rating}</Text>
                <Text>Ratings</Text>
              </View>
              <View style={styles.footerText}>
                <Text style={styles.ratings}>{this.props.stock}</Text>
                <Text>Brand</Text>
              </View>
              <View style={styles.footerText}>
                <Text style={styles.ratings}>{this.props.rating}</Text>
                <Text>Stock</Text>
              </View>
            </View>
          </View>
        </View>
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
