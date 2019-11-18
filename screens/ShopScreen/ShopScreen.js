import React, { Component } from 'react';
import { ScrollView, TextInput, ActivityIndicator, Image, ImageBackground, View, Text, SectionList, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import logoSmall from '../../assets/img/logo-small.png'
import cartIcon from '../../assets/img/gio-hang-icon.png'
import backgroundImage1 from '../../assets/img/bg.png'

const imagePizza = 'https://img.buzzfeed.com/thumbnailer-prod-us-east-1/dc23cd051d2249a5903d25faf8eeee4c/BFV36537_CC2017_2IngredintDough4Ways-FB.jpg'

import styles from './styled';

export default class ShopScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shop: [],
      isLoading: false,
      location: 'Tp.HCM',
      locationLow: '',
      isDropdown: false,
      isData: [
        {
          id: '1',
          title: 'Main dishes',
          data: ['Pizza', 'Burger', 'Risotto'],
        },
        {
          id: '2',
          title: 'Sides',
          data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
        },
        {
          id: '3',
          title: 'Drinks',
          data: ['Water', 'Coke', 'Beer'],
        },
        {
          id: '4',
          title: 'Desserts',
          data: ['Cheese Cake', 'Ice Cream'],
        },
      ],
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/phanhuy111/demoapilocation/shop')
      .then(response => response.json())
      .then(data =>
        this.setState({
          shop: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  _changeDropdown = () => {
    this.setState({
      isDropdown: !this.state.isDropdown
    })
  }

  _getLocation = (title) => {
    this.setState({
      location: title,
      isDropdown: !this.state.isDropdown
    })
  }

  _getLocationLow = (item, section) => {
    // console.log(section.title)
    this.setState({
      locationLow: item,
      location: section.title,
      isDropdown: !this.state.isDropdown
    })
  }

  renderShop = () => {
    const { shop } = this.state
    return (
      shop.map((e, i) => {
        return (
          <View style={styles.product} key={i}>
            <View
              style={styles.image}
            >
              <Image
                source={{ uri: imagePizza }}
                style={{ width: 100, height: 100, borderRadius: 5 }}
              />
            </View>
            <View style={styles.information}>
              <Text style={styles.title}>
                {e.addressTitle}
              </Text>
              <Text style={styles.content}>
                {e.addressContent}
              </Text>
              <Text style={styles.button}>
                {'Chỉ Đường'}
              </Text>
            </View>
          </View>
        )
      })
    )
  }


  _renderDropdown = () => {
    return (
      <View style={styles.listDropDown}>
        <SectionList
          sections={this.state.isData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index, section }) => (
            <View style={{
              paddingLeft: 15,
              paddingVertical: 10
            }}
              key={index}
            >
              <Text style={{
                color: '#4A4A4A',
                fontSize: 16,
              }}
                onPress={() => this._getLocationLow(item, section)}
              >
                {item}
              </Text>
              <View style={styles.highLine} />
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={{
              backgroundColor: '#01703D',
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
              paddingLeft: 15,
              paddingTop: 10,
              height: 40
            }}
              onPress={() => this._getLocation(title)}
            >
              {title}
            </Text>
          )}
        />
      </View>
    )
  }

  render() {
    const { isLoading, location, locationLow, isDropdown } = this.state;
    return (
      <View style={[isDropdown ? styles.containerDropB : styles.containerDropA]}>
        <ImageBackground source={backgroundImage1} style={{ height: '100%', width: '100%' }}>
          <View style={styles.dropdown}>
            <TextInput
              style={styles.input}
              placeholder="Nhập địa điểm bạn muốn…"
              value={locationLow}
            />
            <Text style={styles.indrop} onPress={this._changeDropdown}>
              {location}
            </Text>
          </View>
          {
            isDropdown ? (
              this._renderDropdown()
            ) : null
          }
          <View style={styles.map}>
            <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={{
                width: '100%',
                height: 300
              }}
            />
          </View>
          <View style={styles.container}>
            <ScrollView style={styles.bottom}>
              {
                isLoading ? (
                  <ActivityIndicator size="large" color="white" style={styles.progress} />
                ) : (
                    this.renderShop()
                  )
              }
            </ScrollView>
          </View>
        </ImageBackground >
      </View>
    );
  }
}

ShopScreen.navigationOptions = ({ navigation }) => ({
  title: 'Cửa Hàng',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 80,
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
    <Image
      source={logoSmall}
      style={{
        marginLeft: 12,
        marginTop: 30,
        width: 80.8,
        height: 52.4
      }}
    />
  ),
})


