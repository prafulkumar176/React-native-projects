import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  images: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  container: {
    marginHorizontal: 20,
    marginTop: 10,
    shadowOffset: {
      width: 30,
      height: 30,
    },
    shadowColor: '#66AD47',
    shadowOpacity: 0.4,
    backgroundColor: '#000000',
    borderRadius: 10,
    marginBottom: 30,
  },
  mainContainer: {
    padding: 10,
    marginHorizontal: 8,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    color: 'black',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  cardLabel: {
    fontSize: 11,
    fontWeight: '500',
    color: '#FFFFFF',
    marginVertical: 5,
  },
  cardDescription: {
    marginTop: 5,
    fontSize: 10,
    fontWeight: '400',
    color: '#CAD5E2',
    textAlign: 'justify',
  },
  cardFooter: {
    fontSize: 11,
    color: '#FFFFFF',
    marginVertical: 10,
    marginBottom: 15,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  cardPrice: {
    color: 'green',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textAdd: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'blue',
    textAlign: 'center',
  },
});
