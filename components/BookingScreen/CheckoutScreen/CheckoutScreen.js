import React, { Component } from 'react';
import { Image, ImageBackground, View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styled'
import { imagePizza1, backgroundImage1, editIcon, promotionIcon, cartIcon, backIcon, width } from '../../../constants/root'

const emptyCart = "https://cdn.dribbble.com/users/1244867/screenshots/4346888/empty_cart_1x.jpg"


export default class CheckoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: []
    }
  }

  formatDollar = (num) => {
    var p = num.toFixed(3).split(".");
    return p[0].split("").reverse().reduce(function (acc, num, i, orig) {
      return num == "-" ? acc : num + (i && !(i % 3) ? "," : "") + acc;
    }, "") + "," + p[1];
  }

  upQualityItem = (index) => {
    // console.log('hiiii', index)
    const countIndex = this.props.navigation.state.params.product.map(e => e.count);
    this.setState({
      count: countIndex[index] + 1,
    })
  }

  downQualityItem = (index) => {
    // console.log('hi', index);
    const countIndex = this.props.navigation.state.params.product.map(e => e.count);
    console.log(countIndex[index])
    if (this.state.count > 0) {
      this.setState({
        count: countIndex[index] - 1,
      })
    }
  }

  showPrice = () => {
    const price = this.formatDollar(this.props.navigation.state.params.product.reduce((sum, i) => (
      sum += i.count * i.price
    ), 0))
    return price;
  }

  render() {
    // console.log(this.props.navigation.state.params.product.map(e => e.count))
    const { count } = this.state
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.top}>
          {
            count === 0 ? (
              <View style={{ alignItems: 'center', justifyContent: "center" }}>
                <Image
                  source={{ uri: emptyCart }}
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 100,
                  }}
                />
              </View>
            ) : (
                this.props.navigation.state.params.product.map((e, i) => {
                  // console.log(i)
                  return (
                    <View style={styles.product} key={i}>
                      <View style={styles.left}>
                        <Image
                          source={{ uri: imagePizza1 }}
                          style={styles.imagePro}
                        />
                      </View>
                      <View style={styles.right}>
                        <View style={styles.lineTop}>
                          <Text style={styles.title}>
                            {e.name}
                          </Text>
                          <View style={styles.icons}>
                            <Image
                              source={editIcon}
                              style={styles.icon}
                            />
                            <Image
                              source={editIcon}
                              style={styles.icon}
                            />
                          </View>
                        </View>
                        <View style={styles.lineMid}>
                          <View style={styles.lineMidTop}>
                            <Text>
                              {'Đế bánh'}
                            </Text>
                            <Text>
                              {'Cỡ bánh'}
                            </Text>
                          </View>
                          <View style={styles.lineMidBottom}>
                            <Text style={styles.buttonChoose}>
                              {e.pizza}
                            </Text>
                            <Text style={styles.buttonChoose}>
                              {e.size}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.Bottom}>
                          <View style={styles.BottomLeft}>
                            <Text
                              style={styles.descrease}
                              onPress={() => this.downQualityItem(i)}
                            >
                              {'-'}
                            </Text>
                            <Text style={styles.value}>
                              {this.state.count[i]}
                            </Text>
                            <Text
                              style={styles.increase}
                              onPress={() => this.upQualityItem(i)}
                            >
                              {'+'}
                            </Text>
                          </View>
                          <View style={styles.BottomRight}>
                            <Text style={styles.price}>
                              {this.formatDollar(e.price * this.state.count)}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  )
                })
              )
          }
          {
            count === 0 ? null : (
              <View style={styles.total}>
                <View style={styles.totalTop}>
                  <Image
                    source={promotionIcon}
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Nhập mã khuyến mãi ?"
                  />
                </View>
                <View style={styles.totalBottom}>
                  <Text style={styles.textTotal}>
                    {'Tổng tiền'}
                  </Text>
                  <Text style={styles.totalPrice}>
                    {this.showPrice()}
                  </Text>
                </View>
              </View>

            )
          }
        </View>
        {
          count === 0 ? null : (
            <View style={styles.button}>
              <Text
                style={styles.buttonOrder}
                onPress={() => this.props.navigation.navigate('Delivery', {
                  product: this.props.navigation.state.params.product,
                  totalPrice: this.showPrice(),
                })}
              >
                {'Giao hàng & thanh toán'}
              </Text>
            </View>
          )
        }

      </ImageBackground>
    );
  }
}

CheckoutScreen.navigationOptions = ({ navigation }) => ({
  title: 'Đơn Hàng',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 50,
  },
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
      <Image
        source={cartIcon}
        style={{
          marginRight: 15,
          width: 20,
          height: 17.3
        }}
      />
    </TouchableOpacity>
  ),
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image
        source={backIcon}
        style={{
          marginLeft: 12,
          width: 19,
          height: 15
        }}
      />
    </TouchableOpacity>
  ),
})


