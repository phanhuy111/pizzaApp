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
  all: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  product: {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    width: 160,
    height: 230,
    marginBottom: 15,
  },
  title: {
    color: '#01703D',
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 10
  },
  content: {
    fontSize: 12,
    marginLeft: 10,
  },
  linePrice: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
  },
  price: {
    marginLeft: 12,
    fontWeight: 'bold',
    color: '#01703D'
  },
  button: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#01703D',
    textAlign: "center",
    paddingTop: 1,
    width: 100,
    height: 20,
    color: '#01703D',
    marginLeft: 10,
    marginTop: 10
  },
  bottom: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    height: 200,
    bottom: 0,
    marginLeft: -2,
    marginBottom: -5,
  },
  totalPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  lineBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    bottom: 15
  },
  lineTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    bottom: 15
  },
  buttonBottom: {
    position: 'absolute',
    backgroundColor: '#01703D',
    bottom: 0,
    width: '100%',
    height: 40
  },
  buttonOrder: {
    borderColor: '#01703D',
    borderWidth: 1,
    width: 70,
    height: 25,
    textAlign: 'center',
    borderRadius: 5,
  },
  buttonOrderChoose: {
    borderColor: '#01703D',
    borderWidth: 1,
    width: 70,
    height: 25,
    textAlign: 'center',
    borderRadius: 5,
    backgroundColor: '#01703D'
  },
  text: {
    color: '#01703D',
    fontSize: 15,
    fontWeight: 'bold'
  },
  bottomCheckout: {
    backgroundColor: '#01703D',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    width: '80%',
    height: 40,
    bottom: 10,
    marginLeft: 30,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingTop: 10
  },
  textBottom: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  textWBottom: {
    color: 'white',
    fontSize: 14
  },
  bottomCount: {
    fontSize: 15,
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    // paddingVertical: 5,
    marginBottom: 10,
  }
});

export default styles