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
  top: {
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
  },
  right: {
    marginLeft: 20
  },
  BottomLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  Bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  imagePro: {
    width: 70,
    height: 40,
  },
  lineTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icons: {
    flexDirection: 'row',
    paddingLeft: 20,
  },
  title: {
    color: '#01703D',
    fontWeight: 'bold'
  },
  descrease: {
    textAlign: 'center',
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#9B9B9B',
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  increase: {
    textAlign: 'center',
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#01703D',
    color: 'white',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  value: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    color: '#01703D',
    borderColor: '#01703D',
    textAlign: 'center'
  },
  buttonChoose: {
    backgroundColor: '#01703D',
    width: 80,
    height: 25,
    borderRadius: 10,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    color: 'white'
  },
  totalTop: {
    flexDirection: 'row'
  },
  totalBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  lineMid: {
    width: 200,
  },
  lineMidBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lineMidTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  product: {
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: 'white',
    width: width - 24,
    height: 140,
    paddingTop: 10,
    marginBottom: 10,
  },
  left: {
    marginHorizontal: 5,
  },
  total: {
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    marginLeft: 30,
    marginTop: 12,
  },
  buttonOrder: {
    width: width - 60,
    height: 40,
    fontSize: 14,
    color: 'white',
    backgroundColor: '#01703D',
    textAlign: 'center',
    paddingTop: 12,
  },
  textTotal: {
    fontSize: 14,
  }
});

export default styles