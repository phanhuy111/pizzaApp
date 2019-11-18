import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
  containerDropA: {
    height: '100%',
    width: '100%',
  },
  containerDropB: {
    position: 'absolute',
    backgroundColor: 'black',
    height: '100%',
    width: '100%',
    zIndex: 999
  },
  dropdown: {
    position: 'absolute',
    zIndex: 9999,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 5,
    height: 45,
    width: width - 20,
  },
  input: {
    flex: 0.6,
    height: 30,
    borderColor: 'transparent',
    borderWidth: 1,
    backgroundColor: 'white',
    color: '#4A4A4A',
    fontSize: 13,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
    paddingLeft: 10,
  },
  indrop: {
    flex: 0.4,
    height: 30,
    color: '#4A4A4A',
    fontSize: 13,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingTop: 5,
  },
  itemPicker: {
    color: '#4A4A4A',
    fontSize: 13,
  },
  product: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 15,
    flexDirection: 'row'
  },
  information: {
    paddingLeft: 20,
  },
  title: {
    color: '#01703D',
    fontSize: 14,
    fontWeight: 'bold'
  },
  content: {
    paddingTop: 1.8,
    paddingBottom: 15,
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#01703D',
    textAlign: "center",
    paddingTop: 5,
    width: 122,
    height: 30,
    color: '#01703D'
  },
  progress: {
    justifyContent: 'center',
    flexDirection: 'row',
    // zIndex: 99
  },
  listDropDown: {
    position: 'absolute',
    marginHorizontal: 16,
    backgroundColor: 'white',
    zIndex: 999,
    marginTop: 65,
    marginLeft: 10,
    marginRight: 10,
    width: width - 20,
    height: 550,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  highLine: {
    borderBottomColor: '#4A4A4A',
    borderBottomWidth: 1,
    width: width - 40,
    opacity: 0.1,
    marginHorizontal: 10,
    marginVertical: 2,
  }
});

export default styles