import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import {styles} from './InfiniteScrollStyles';
import InfiniteScrollControllers from './InfiniteScrollControllers';
import InfiniteScrollCards from './InfiniteScrollCards';

export default class InfiniteScroll extends InfiniteScrollControllers {
  render() {
    return (
      <LinearGradient
        colors={['#9083D7', '#E0A8CE', '#F8E3E5']}
        start={{x: 1.5, y: 0}}
        style={styles.LinerStyles}>
        <View>
          <View style={styles.MainContainer}>
            <TouchableOpacity>
              <Text>
                <MaterialIcons name="arrow-back-ios" size={22} color="white" />
              </Text>
            </TouchableOpacity>
            <Text style={styles.passengerText}>Passengers List</Text>
            <TouchableOpacity>
              <Octicons name="three-bars" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <CalendarStrip
            scrollable
            style={{
              height: 50,
              backgroundColor: 'white',
              marginHorizontal: 15,
              borderRadius: 15,
              marginTop: 25,
            }}
            scrollerPaging={true}
            calendarColor={'#3343CE'}
            calendarHeaderStyle={{display: 'none'}}
            dateNumberStyle={{color: 'black'}}
            dateNameStyle={{color: 'black'}}
            iconContainer={{flex: 0.1}}
            // onDateSelected={val => val.date}
            selectedDate={new Date()}
            Type={'background'}
            duration={2000}
            borderHighlightColor={'green'}
            borderWidth={80}
            highlightDateNameStyle={{
              color: '#9793DF',
              backgroundColor: 'white',
            }}
            highlightDateNumberStyle={{
              color: '#9793DF',
              backgroundColor: 'white',
            }}
          />
          <View style={{paddingBottom: 380}}>
            <FlatList
              data={this.state?.passengersData[0]?.data}
              renderItem={({item}) => {
                return <InfiniteScrollCards data={item} />;
              }}
              onEndReached={this.fetchData}
              onEndReachedThreshold={0.5}
              ListFooterComponent={this.renderFooter}
              testID='flatlist'
            />
          </View>
        </View>
      </LinearGradient>
    );
  }
}
