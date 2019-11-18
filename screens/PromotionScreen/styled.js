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
  product: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    marginBottom: 15,
  },
  image: {
    margin: 2,
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#01703D',
    textAlign: "center",
    paddingTop: 5,
    width: 122,
    height: 30
  },
  information: {
    paddingTop: 8,
    paddingHorizontal: 15,
    marginBottom: 15
  },
  title: {
    width: 120,
    flexDirection: 'row'
  },
  textTitle: {
    fontSize: 14,
    color: '#01703D',
  },
  content: {
    marginVertical: 5
  }
});

export default styles