import React, { Component } from 'react';
import { Image, ActivityIndicator, ScrollView, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

import styles from './styled';

import { logoSmall, cartIcon, backgroundImage1, imagePizza1 } from '../../constants/root'

export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      isLoading: true
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/phanhuy111/demoapi/product')
      .then(response => response.json())
      .then(data =>
        this.setState({
          product: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  renderMenu = () => {
    const { product } = this.state
    return (
      product.map((e, i) => {
        return (
          <View style={styles.product} key={i}>
            <Image
              source={{ uri: imagePizza1 }}
              style={{
                width: 100,
                height: 100
              }}
            />
            <Text style={styles.title}>
              {e.title}
            </Text>
            <Text
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Detail', { id: e.id, product: e.product })}
            >
              Xem
            </Text>
          </View>
        )
      })
    )
  }

  render() {
    const { isLoading } = this.state
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <ScrollView style={styles.container}>
          <View style={styles.column}>
            {
              isLoading ? (
                <ActivityIndicator size="large" color="yellow" style={styles.progress} />
              ) : (
                  this.renderMenu()
                )
            }
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

MenuScreen.navigationOptions = ({ navigation }) => ({
  title: 'Thực Đơn',
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

