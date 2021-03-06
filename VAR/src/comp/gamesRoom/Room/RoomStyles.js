import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22343C'
  },
  text: {
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    marginLeft: 105
  },
  joinText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'sans-serif-thin',
    marginTop: 25,
    marginRight: 140,
    position: 'relative'
  },
  matchText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'sans-serif-thin',
    marginTop: 25,
    marginRight: 75,
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center'
  },
  formContainer: {
    position: 'relative',
    marginLeft: 80,
    marginTop: 15,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20
  },
  pickerContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: 'white'
  },
  league: {
    fontFamily: 'sans-serif-thin',
    fontSize: 15,
    color: '#FFFFFF',
    marginRight: 50
  },
  score: {
    fontFamily: 'sans-serif-thin',
    color: 'rgb(255, 197, 66)',
    position: 'relative',
    marginTop: 5,
    justifyContent: 'center'
  },
  submit: {
    position: 'relative',
    borderColor: '#3ED598',
    backgroundColor: '#286053',
    width: 120,
    height: 50,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 65,
    marginLeft: 40,
    shadowColor: 'rgb(255, 197, 66)',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  buttonText: {
    fontFamily: 'sans-serif-thin',
    fontSize: 20,
    color: 'white'
  },
  modal: {
    flex: 1,
    color: 'white',
    justifyContent: 'space-around'
  },
  msgContainer: {
    flex: 1,
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  titleRoom: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  titleCode: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25
  },
  roomCode: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
  copyCode: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },
  goBackButton: {
    marginTop: 50,
    marginLeft: 100,
    fontFamily: 'sans-serif-thin',
    color: 'white',
    textAlign: 'center',
    backgroundColor: '#286053',
    width: 120,
    shadowColor: 'rgb(255, 197, 66)',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24
  },
  nameHomeAway: {
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row-reverse',
    width: '100%',
    marginBottom: '2%',
    position: 'relative',
    marginTop: '1%',
    justifyContent: 'space-evenly'
  },
  columnsTitle: {
    fontFamily: 'sans-serif-thin',
    fontSize: 13,
    color: 'rgb(255, 197, 66)'
  },
  rowFlatList: {
    fontFamily: 'sans-serif-thin',
    fontSize: 11.5,
    color: 'white'
  },
  rowContent: {
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row-reverse',
    width: '100%',
    marginBottom: '2%',
    position: 'relative',
    marginTop: '1%',
    justifyContent: 'space-evenly'
  },
  titleAndArrow: {
    flexDirection: 'row',
    marginLeft: '5%',
    justifyContent: 'space-between'
  },
  matchRow: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    position: 'relative',
    width: '100%'
  },
  teamName: {
    fontFamily: 'sans-serif-thin',
    color: 'white',
    position: 'relative',
    marginTop: 5,
    width: '40%',
    textAlign: 'center',
    fontSize: 12
  },
  teamLogo: {
    position: 'relative',
    width: 20,
    height: 20
  },
  tableBox: {
    marginBottom: 30,
    marginTop: 10,
    marginLeft: '5%',
    width: '90%',
    backgroundColor: '#2A3C44',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    justifyContent: 'space-between'
  },
  headlines: {
    marginBottom: '20%'
  },
  minute: {
    color: '#FF8A34',
    fontSize: 9,
    marginTop: 20
  },
  minuteContainer: {
    justifyContent: 'center',
    position: 'relative'
  },
  matchView: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 20
  }
});

export default styles;
