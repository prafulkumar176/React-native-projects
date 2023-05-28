import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
  passengerText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    color: 'white',
  },
  cardContainer: {
    marginHorizontal: 15,
    marginTop: 25,
    backgroundColor: 'white',
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageIcon: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginLeft: 20,
  },
  airLineText: {
    color: 'black',
    marginTop: 5,
    textAlign: 'center',
    width: 80,
  },
  bookText: {color: 'green'},
  nameText: {marginLeft: 2, color: 'black'},
  centerItems: {alignItems: 'center'},
  timeText: {color: 'black', fontWeight: '600'},
  priceText: {paddingTop: 10, color: 'black', fontSize: 18, fontWeight: '800'},
  outerItem: {
    position: 'absolute',
    elevation: 8,
    right: 15,
    top: -10,
    zIndex: 1,
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 6,
    paddingHorizontal: 10,
  },
  LinerStyles: {width: width, height: height},
});
