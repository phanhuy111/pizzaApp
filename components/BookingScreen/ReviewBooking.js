import React, { Component } from 'react';
import { TextInput, StyleSheet, Image, ImageBackground, View, Text } from 'react-native';
import { personIconGreen, backgroundImage1, imagePizza, width } from '../../constants/root'

export default class ReviewBooking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
    }
  }

  isShowProduct = () => {
    this.setState({
      isShow: true
    })
  }

  showProduct = () => {
    const { params } = this.props.navigation.state.params.order
    params.product.map((e, i) => {
      return (
        <View key={i}>
          <Image
            source={{ uri: imagePizza }}
            style={{ width: 50, height: 50 }}
          />
          <Text>
            {e.name}
          </Text>
          <Text>
            {e.price}
          </Text>
        </View>
      )
    })
  }

  render() {
    const { isShow } = this.state
    const { date, time, id, params } = this.props.navigation.state.params.order
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.all}>
          <View style={styles.address}>
            <View style={styles.top}>
              <Text style={styles.textLeft}>
                {`Đơn hàng ${id}`}
              </Text>
              <Text
                style={styles.textRight}
                onPress={() => this.isShowProduct()}
              >
                {isShow ? 'Chi tiết món v' : 'Chi tiết món >'}
              </Text>
            </View>
            {
              isShow ? this.showProduct() : null
            }
            <View style={styles.highLine} />
            <View style={styles.top}>
              <Text style={styles.textLeft}>
                {'Tổng tiền'}
              </Text>
              <Text style={styles.textRight}>
                {params.totalPrice}
              </Text>
            </View>
            <View style={styles.highLine} />
            <View style={styles.top}>
              <Text style={styles.textLeft}>
                {'Thời gian dự kiến giao hàng '}
              </Text>
              <Text style={styles.textRight}>
                {`${date},${time}`}
              </Text>
            </View>
            <View style={styles.highLine} />
            <View style={styles.bottom}>
              <View style={styles.line}>
                <Image
                  source={personIconGreen}
                  style={styles.icon}
                />
                <Text style={styles.text}>
                  {'The pizza company'}
                </Text>
              </View>
              <View style={styles.muldot}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
              <View style={styles.line}>
                <Image
                  source={personIconGreen}
                  style={styles.icon}
                />
                <Text style={styles.text}>
                  {'Xác nhận'}
                </Text>
              </View>
              <View style={styles.muldot}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
              <View style={styles.line}>
                <Image
                  source={personIconGreen}
                  style={styles.icon}
                />
                <Text style={styles.text}>
                  {'Đang giao hàng'}
                </Text>
              </View>
              <View style={styles.muldot}>
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
              </View>
              <View style={styles.line}>
                <Image
                  source={personIconGreen}
                  style={styles.icon}
                />
                <Text style={styles.text}>
                  {params.nameShop}
                </Text>
              </View>
            </View>
          </View>
          <Text style={styles.title}>
            {'Hình thức thanh toán'}
          </Text>
          <TextInput
            style={styles.note}
            placeholder="Thanh toán khi nhận hàng (COD)"
          />
        </View>
        <View style={styles.buttonBottom}>
          <Text style={styles.textButton}>
            {'Liên hệ 1800 9999'}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

ReviewBooking.navigationOptions = ({ navigation }) => ({
  title: `Đặt hàng`,
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 50,
  },
  headerRight: (
    <Text style={{
      fontSize: 12,
      color: 'white',
      marginRight: 10,
    }}
      onPress={() => navigation.navigate('Promotion')}
    >
      Trang Chủ
    </Text>
  ),
  headerLeft: (
    null
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  address: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
    padding: 10,
    marginVertical: 10,
    width: width - 20,
    height: 380
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  highLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: width - 20,
    opacity: 0.1,
    marginHorizontal: 10,
    marginVertical: 10,
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
    marginLeft: 5
  },
  note: {
    backgroundColor: 'white',
    marginLeft: 12,
    marginRight: 12,
    padding: 12,
    borderRadius: 5,
  },
  title: {
    fontSize: 13,
    color: 'white',
    marginLeft: 12,
    marginTop: 10,
  },
  line: {
    flexDirection: 'row'
  },
  bottom: {
    marginTop: 10
  },
  text: {
    paddingLeft: 10
  },
  textRight: {
    color: '#01703D',
    fontSize: 16,
    fontWeight: '400'
  },
  buttonBottom: {
    position: 'absolute',
    bottom: 0,
  },
  textButton: {
    width: width,
    height: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#01703D',
    textAlign: 'center',
    paddingTop: 12,
  }
});
