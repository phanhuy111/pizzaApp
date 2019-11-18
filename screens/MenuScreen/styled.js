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
  column: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderRadius: 10,
    width: width - 20,
    height: 170,
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 1,
  },
  product: {
    paddingLeft: 15
  },
  title: {
    color: '#01703D',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#01703D',
    textAlign: "center",
    paddingTop: 1,
    width: 50,
    height: 20,
    color: '#01703D',
    marginLeft: 10,
    marginTop: 10
  },
  progress: {
    flex: 1,
    position: 'absolute',
    marginHorizontal: '50%',
    marginTop: 30,
    zIndex: 999
  }
});

export default styles