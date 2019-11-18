import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  },
  title: {
    fontSize: 13,
    color: 'white',
    marginLeft: 12,
    marginTop: 15,
  },
  address: {
    width: width - 24,
    height: 160,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 12,
    marginRight: 12,
  },
  highLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: width - 24,
    margin: 10,
  },
  information: {
    width: width - 24,
    height: 140,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 12,
    marginRight: 12,
  },
  top: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 15,
  },
  lineMid: {
    margin: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  changeInfor: {
    marginTop: 15,
  },
  textButton: {
    textAlign: 'center',
    fontSize: 13,
  },
  note: {
    backgroundColor: 'white',
    marginLeft: 12,
    marginRight: 12,
    padding: 12,
    borderRadius: 5,
  },
  note1: {
    backgroundColor: 'white',
    paddingLeft: 10,
    marginTop: -3,
    backgroundColor: 'transparent',
    borderRadius: 5,
  },
  button: {
    marginBottom: 5,
  },
  order: {
    borderRadius: 5,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white'
  },
  activeTabTextColor: {
    color: '#4A4A4A'
  },
  tabTextColor: {
    color: 'white'
  },
  text: {
    marginLeft: 12,
    fontSize: 14,
  },
  icon: {
    width: 14,
    height: 14
  },
  line: {
    flexDirection: 'row',
    paddingLeft: 12,
    marginTop: 10,
  },
  dot: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 1,
    margin: 5,
    fontWeight: 'bold'
  },
  muldot: {
    flexDirection: 'column-reverse',
    marginLeft: 12
  },
  button: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#01703D',
    width: width - 50,
    height: 40,
    marginLeft: 25
  },
  bottomModal: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    bottom: 0,
    marginLeft: -2,
    marginBottom: -5,
  },
  totalText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonBottomModal: {
    position: 'absolute',
    backgroundColor: '#01703D',
    bottom: 0,
    width: '100%',
    height: 50
  },
  lineTopModal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  textModal: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#4A4A4A'
  },
  totalTitle: {
    marginLeft: 15,
    marginBottom: 10,
    top: 5,
  },
  dateTime: {
    fontSize: 15,
    color: '#4A4A4A'
  }
});

export default styles