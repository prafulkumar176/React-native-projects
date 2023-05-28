import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  topbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  menuMusicPlayer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth: 1,
    width: 170,
  },

  musicText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  musicText2: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  textoflist: {
    fontSize: 12,
  },
  listOfNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 5,
    fontSize: 12,
  },
  albumsPicture: {
    height: 60,
    width: 60,
    borderRadius: 5,
    // borderWidth: 1,
  },
  playListGird: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    padding: 12,
  },
  playListGirdTextContainer: {
    marginLeft: 25,
  },
  headingText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descriptionText: {
    paddingTop: 10,
    fontWeight: '600',
  },
  modalHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 25,
    padding: 20,
  },
  modalCategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    // flex: 1,
  },
  songText: {
    fontWeight: 'bold',
  },
  lyricsText: {
    fontWeight: '600',
  },

  posterPicture: {
    width: '80%',
    height: 320,
    // justifyContent: 'center',
    marginLeft: 40,
    resizeMode: 'contain',
    borderRadius: 30,
    marginTop: 20,
  },
  artistDetailsContainer: {
    marginTop: 25,
  },
  artistNameText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subartistsText: {
    textAlign: 'center',
    fontSize: 12,

    marginTop: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    marginTop: 20,
  },
  sliderContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 40,
    marginTop: 5,
  },
  slider: {
    width: 320,
    height: 40,
    alignSelf: 'center',
  },
  playBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    margin: 10,
    color: 'black',
  },
  timingsTextcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    width: 290,
    alignSelf: 'center',
  },
  modelbotton: {
    width: '100%',
    height: 60,
    // backgroundColor: '#BCBCBC',
    // borderRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    marginBottom: 85,
  },
  modelview2: {
    width: 250,
    height: 200,
    marginHorizontal: 50,
    // marginVertical: 60,
    alignItems: 'center',
  },
  modelbtnimage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginLeft: 20,
    marginTop: 5,
  },
  modelbtn3: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'baseline',
    // justifyContent: 'flex-end',
    marginLeft: 170,
  },
  blocktitle: {
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 5,
  },
  blockothertext: {
    fontSize: 10,
  },
  innerblock: {
    marginLeft: 10,
  },
});
