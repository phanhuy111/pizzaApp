import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { backIcon, personIcon, backgroundImage1, imagePizza, width } from '../../constants/root'

export default class ChooseShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
      isLoading: false,
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

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        {
          this.state.shop.map((e, i) => {
            return (
              <View
                style={styles.product}
                key={i}
              >
                <Image
                  source={{ uri: imagePizza }}
                  style={styles.imageP}
                />
                <View style={styles.information}>
                  <Text
                    style={styles.title}
                    onPress={() => this.props.navigation.navigate('Delivery', { nameShop: e.addressTitle })}
                  >
                    {e.addressTitle}
                  </Text>
                  <Text style={styles.address}>
                    {e.addressContent}
                  </Text>
                  <View style={styles.bottom}>
                    <Image
                      source={personIcon}
                      style={styles.icon}
                    />
                    <Text style={styles.destination}>
                      0.0 km
                    </Text>
                  </View>
                </View>
              </View>
            )
          })
        }
      </ImageBackground>
    );
  }
}

ChooseShopScreen.navigationOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: '#01703D' },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image
        source={backIcon}
        style={{
          marginLeft: 12,
          marginTop: 5,
          width: 19,
          height: 15
        }}
      />
    </TouchableOpacity>
  ),
  headerTitle: (
    <TextInput
      placeholder='Nhập cửa hàng'
      style={{
        marginRight: 50,
        width: width - 80,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#00512C',
        borderColor: 'transparent',
        height: 35,
        color: 'white',
        paddingLeft: 10,
      }}
    />
  ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  product: {
    width: width - 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    height: 100,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5
  },
  imageP: {
    width: 180,
    height: 100,
  },
  information: {
    width: 150,
  },
  title: {
    color: '#01703D',
    fontWeight: 'bold',
    fontSize: 13,
    marginLeft: 12,
  },
  address: {
    fontSize: 13,
    color: '#4A4A4A',
    marginLeft: 12,
  },
  icon: {
    width: 10,
    height: 10,
    marginTop: 5,
  },
  bottom: {
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 25,
  }
});
