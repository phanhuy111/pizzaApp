import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Image, Dimensions, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import Modal from "react-native-modal";
import styles from './styled';

import { backIcon, cartIcon, backgroundImage1, width } from '../../../constants/root'

import AllTypeScreen from './AllTypeScreen'
import TranditionalScreen from './TranditionalScreen'
import Special from './SpecialScreen'
import Button from './RenderButton'

const SeaFood = () => (
  <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
);

export default class MenuDetailScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      isChoosePizza: false,
      isChooseSize: false,
      isChooseArrSize: [],
      isChooseArrBottom: [],
      valuePizza: '',
      valueSize: '',
      isProductName: '',
      isProductPrice: '',
      isProductType: '',
      product: [],
      filterProduct: [],
      bottomPizza: [],
      increaseBottom: 0,
      size: [],
      increaseSize: 0,
      total: 0,
      routes: [
        {
          key: 'first',
          title: 'Tất Cả',
        },
        {
          key: 'second',
          title: 'Truyền Thống',
        },
        {
          key: 'three',
          title: 'Đặc Biệt',
        },
        {
          key: 'four',
          title: 'Hải Sản',
        },
      ],
      // _setPrice: false,
      isModalVisible: false,
      isModalCheckout: false,
      productShop: [],
      isLoading: true,
    }
  }

  componentDidMount() {
    fetch(`https://my-json-server.typicode.com/phanhuy111/demoapi/product/${this.props.navigation.state.params.id} `)
      .then(response => response.json())
      .then(data =>
        this.setState({
          product: data.product,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }


  _chooseButtonPizza = (code, name, index) => {
    this.state.isChooseArrBottom[index].isChoosePizza = !this.state.isChooseArrBottom[index].isChoosePizza;
    this.setState({
      isChooseArrBottom: this.state.isChooseArrBottom,
      valuePizza: name,
      increaseBottom: code
    })
  }

  _chooseButtonSize = (code, name, index) => {
    this.state.isChooseArrSize[index].isChooseSize = !this.state.isChooseArrSize[index].isChooseSize;
    this.setState({
      isChooseArrSize: this.state.isChooseArrSize,
      valueSize: name,
      increaseSize: code
    })
  }


  _toggleModal = (bottomPizza, size, name, price, type) => {
    if (size.length > 0) {
      let arrChoose = [];
      size.forEach(item => {
        arrChoose.push({ isChooseSize: false });
      });
      this.state.isChooseArrSize = [...arrChoose];
      this.setState({
        isChooseArrSize: this.state.isChooseArrSize
      })
    }
    if (bottomPizza.length > 0) {
      let arrChoose = [];
      bottomPizza.forEach(item => {
        arrChoose.push({ isChoosePizza: false });
      });
      this.state.isChooseArrBottom = [...arrChoose];
      this.setState({
        isChooseArrBottom: this.state.isChooseArrBottom
      })
    }
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      // _setPrice: !this.state._setPrice,
      bottomPizza,
      size,
      isProductName: name,
      isProductPrice: price,
      isProductType: type,
    });
  };


  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <AllTypeScreen toggleModal={this._toggleModal} product={this.state.product} isLoading={this.state.isLoading} />;
      case 'second':
        return <TranditionalScreen product={this.state.filterProduct} />;
      case 'three':
        return <Special product={this.state.filterProduct} />;
      case 'four':
        return <SeaFood product={this.state.filterProduct} />;
      default:
        return null;
    }
  };

  _onTabPress = ({ route, preventDefault }) => {
    const filterProduct1 = this.state.product.filter((e) => {
      return (e.type === 'Truyền thống');
    })
    const filterProduct2 = this.state.product.filter((e) => {
      return (e.type === 'Đặc biệt');
    })
    const filterProduct3 = this.state.product.filter((e) => {
      return (e.type === 'Hải sản');
    })
    if (route.key === 'second') {
      this.setState({
        filterProduct: filterProduct1
      })
    }
    if (route.key === 'three') {
      this.setState({
        filterProduct: filterProduct2
      })
    }
    if (route.key === "four") {
      this.setState({
        filterProduct: filterProduct3
      })
    }
  }

  getTotalPrice = () => {
    const { isChooseArrBottom, isChooseArrSize, increaseBottom, increaseSize, isProductPrice } = this.state
    let total = +isProductPrice
    if (increaseBottom !== 0 && isChooseArrBottom) {
      total = (+isProductPrice + (+isProductPrice * increaseBottom / 100))
    }
    if (increaseSize !== 0 && isChooseArrSize) {
      total = (+isProductPrice + (+isProductPrice * increaseSize / 100))
    }
    if (isChooseArrBottom && isChooseArrSize) {
      total = (+isProductPrice + (+isProductPrice * increaseBottom / 100) + (+isProductPrice * increaseSize / 100))
    }
    return total.toFixed(2)
  }

  _renderCheckoutBar = () => {
    const { valueSize, valuePizza, isProductName } = this.state
    let isPrice = this.getTotalPrice();
    const information = {
      name: isProductName,
      price: isPrice,
      pizza: valuePizza,
      size: valueSize,
      count: 1
    }
    const product = [];
    product.push(information);
    this.setState(prevState =>
      ({
        productShop: [...prevState.productShop, information],
        isModalVisible: false,
        isModalCheckout: true,
        // _setPrice: false,
      })
    )
  }

  _renderTotalPrice = () => {
    const { productShop } = this.state
    const price = productShop.reduce((a, { price }) => a + (+price), 0);
    return price
  }

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: Dimensions.get('window').width }}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#01703D', height: 3, width: 60, marginLeft: 16 }}
              style={{ backgroundColor: 'white', textAlign: 'center' }}
              labelStyle={{ color: 'black', fontSize: 10, }}
              onTabPress={this._onTabPress}
            />
          }
        />
        <Modal
          style={styles.bottom}
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
        >
          <View style={styles.totalPrice}>
            <Text>
              {'Vui lòng chọn cỡ & đế bánh'}
            </Text>
            <Text style={styles.text}>
              {this.getTotalPrice()}
            </Text>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, opacity: 0.5, marginLeft: 12, width: width - 24, bottom: 20, }} />
          <View style={styles.lineTop}>
            <Text>
              {'Đế bánh'}
            </Text>
            {
              this.state.bottomPizza.map((e, i) => {
                return (
                  <Button
                    key={i}
                    index={i}
                    name={e.name}
                    code={e.increase}
                    _chooseButton={(code, name, i) => this._chooseButtonPizza(code, name, i)}
                    isChoose={this.state.isChooseArrBottom[i] ? this.state.isChooseArrBottom[i].isChoosePizza : false}
                  />
                )
              })
            }
          </View>
          <View style={styles.lineBottom}>
            <Text>
              {'Cỡ bánh'}
            </Text>
            {
              this.state.size.map((e, i) => {
                return (
                  <Button
                    key={i}
                    index={i}
                    name={e.name}
                    code={e.increase}
                    _chooseButton={(code, name, i) => this._chooseButtonSize(code, name, i)}
                    isChoose={this.state.isChooseArrSize[i] ? this.state.isChooseArrSize[i].isChooseSize : false}
                  />
                )
              })
            }
          </View>
          <View style={styles.buttonBottom}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'center',
              paddingTop: 10
            }}
              onPress={
                () => this._renderCheckoutBar()
              }
            >
              {'Đồng ý'}
            </Text>
          </View>
        </Modal>
        {
          this.state.isModalCheckout ? (
            <View
              style={styles.bottomCheckout}
            >
              <Text style={styles.textBottom}>
                {this._renderTotalPrice()}
              </Text>
              <Text
                style={styles.textWBottom}
                onPress={() => this.props.navigation.navigate('Checkout', {
                  product: this.state.productShop
                })}
              >
                {'Xem đơn hàng'}
              </Text>
              <Text style={styles.bottomCount}>
                {this.state.productShop.length}
              </Text>
            </View>

          ) : null
        }
      </ImageBackground>
    );
  }
}

MenuDetailScreen.navigationOptions = ({ navigation }) => ({
  title: 'Pizza',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 85,
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


