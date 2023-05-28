/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './InfiniteScrollStyles';
import InfiniteScrollControllers from './InfiniteScrollControllers';

let randomNum = Math.floor(1000 + Math.random() * 9000);
export default class InfiniteScrollCards extends InfiniteScrollControllers {
  render() {
    const {airline, name, trips, _id} = this.props?.data;
    return (
      <TouchableOpacity style={styles.cardContainer}>
        <FlatList
          data={airline}
          renderItem={({item}) => {
            const airlineName = item.name;
            const url = item.logo;

            return (
              <View>
                <Image
                  source={{
                    uri: !url
                      ? 'https://beebom.com/wp-content/uploads/2015/02/airline-logos-airasia-e1424575285622.jpg'
                      : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfpKsUt5VSyey3rQVZ23w5lmTIIRwGHkURg&usqp=CAU',
                  }}
                  style={styles.imageIcon}
                />
                <Text style={styles.airLineText}>{airlineName}</Text>
              </View>
            );
          }}
        />

        <View style={styles.centerItems}>
          <Text style={styles.bookText}>Booked by</Text>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.centerItems}>
          <Text style={styles.timeText}>11:40 - 13:50</Text>
          <Text style={styles.priceText}>${randomNum}</Text>
        </View>
        <View style={styles.outerItem}>
          <Text style={{color: 'orange'}}>{trips} Trips</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
