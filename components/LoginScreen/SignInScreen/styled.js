import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  highLine: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: width - 30,
    marginLeft: 15,
    opacity: 0.5
  },
  lineThree: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  lineThreeText: {
    fontSize: 14,
    color: 'white'
  },
  top: {
    marginLeft: 12
  },
  input: {
    marginLeft: 12,
    marginVertical: 10,
    color: 'white',
    paddingLeft: 10,
    opacity: 0.5
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    marginVertical: 2,
    marginLeft: 10,
  },
  content: {
    fontSize: 14,
    color: 'white',
    margin: 10,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
  },
  bottomAppear: {
    bottom: 0,
    top: '12%',
  },
  bottomText: {
    borderRadius: 5,
    textAlign: 'center',
    paddingTop: 10,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    width: width - 50,
    marginLeft: 25,
    backgroundColor: '#01703D',
    height: 40,
    marginBottom: 20,
  },
});

export default styles;