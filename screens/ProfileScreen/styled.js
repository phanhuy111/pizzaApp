import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  midscreen: {
    position: 'absolute',
  },
  top: {
    height: 200,
    backgroundColor: '#005D32'
  },
  infor: {
    marginTop: 20,
    paddingHorizontal: (width - 100) / 2,
  },
  us: {
    marginTop: 5,
    paddingHorizontal: (width - 94) / 2,
  },
  bottom: {
    marginTop: 50,
  },
  text: {
    fontSize: 18,
    color: 'white'
  },
  column: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical:10,
    justifyContent: 'space-between'
  },
  columLeft: {
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#3B5998',
    width: 200,
    height: 30,
    borderRadius: 10,
    paddingTop: 5,
    marginHorizontal: 80,
    marginTop: 20,
  },
  midscreen: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    width: width - 50,
    marginLeft: 25,
    marginRight: 25,
    height: 90,
    top: '27%',
    zIndex: 99999,
    borderRadius: 10,
  },
  midLeft: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    alignItems: 'center',
    flex: 0.5,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  midRight: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ECECEC',
    textAlign: 'center',
    alignItems: 'center',
    flex: 0.5,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10
  },
  textNumber: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#01703D'
  }
})

export default styles