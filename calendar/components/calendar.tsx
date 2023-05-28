/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Agenda, Calendar, CalendarList} from 'react-native-calendars';

interface IState {
  selected: string;
}

export default class CalendarPart extends Component<IState> {
  state: IState = {
    selected: '2023-05-17',
  };
  render() {
    return (
      <View>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 35,
            marginTop: 60,
          }}>
          Calendar
        </Text>
        {/* <Calendar
          style={{
            // borderWidth: 1,
            borderColor: 'gray',
            height: '100%',
          }}
          onDayPress={day => {
            this.setState({selected: day.dateString});
          }}
          markedDates={{
            [this.state.selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: 'red',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: 'blue',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e',
          }}
        /> */}
        <CalendarList
          onVisibleMonthsChange={months => {
            console.log('now these months are visible', months);
          }}
          horizontal={true}
          pagingEnabled={true}
          scrollEnabled={true}
          // Enable or disable vertical scroll indicator. Default = false
          markedDates={{
            [this.state.selected]: {
              selected: true,
              disableTouchEvent: true,
              selectedDotColor: 'orange',
            },
          }}
          theme={{
            backgroundColor: '#ffffff',
            calendarBackground: '#ffffff',
            textSectionTitleColor: 'red',
            selectedDayBackgroundColor: '#00adf5',
            selectedDayTextColor: '#ffffff',
            todayTextColor: '#00adf5',
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e',
          }}
          onDayPress={day => {
            this.setState({selected: day.dateString});
          }}
          style={{
            borderColor: 'black',
            marginTop: 60,
            backgroundColor: 'white',
            elevation: 6,
          }}
        />
      </View>
    );
  }
}
