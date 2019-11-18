import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  View,
  Text
} from 'react-native';

import logoSmall from '../assets/img/logo-small.png'
import backgroundImage1 from '../assets/img/bg.png'
import bannerImage from '../assets/img/banner.png'
import mailIcon from '../assets/img/mail-icon.png'

import faceIcon from '../assets/img/facebook-icon.png'
import googleIcon from '../assets/img/google-icon.png'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class LoginScreen extends Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        5000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('Main');
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <Image
            source={bannerImage}
            style={{
              width: '100%',
              height: height / 2,
            }}
          />
          <View style={styles.information}>
            <View style={styles.textTop}>
              <Text style={styles.title}>
                {'Xin Chào'}
              </Text>
              <Text style={styles.content}>
                {'Đăng nhập để trở thành một trong hàng ngàn khách hàng của chúng tôi & nhận nhiều ưu đãi.'}
              </Text>
            </View>
            <View style={styles.buttonSocial}>
              <View style={styles.buttonF}>
                <Image
                  source={faceIcon}
                  style={{
                    width: 8.7,
                    height: 16.7,
                    marginRight: 5
                  }}
                />
                <Text style={styles.textButton}>
                  {'Đăng nhập bằng facebook'}
                </Text>
              </View>
              <View
                style={styles.buttonG}
              >
                <Image
                  source={googleIcon}
                  style={{
                    width: 17.8,
                    height: 16.6,
                    marginRight: 5
                  }}
                />
                <Text style={styles.textButton}>
                  {'Đăng nhập bằng Google'}
                </Text>
              </View>
            </View>
            <View style={styles.buttonAuth}>
              <View
                style={styles.signin}
                onPress={() => this.props.navigation.navigate('SignIn')}
              >
                <Image
                  source={mailIcon}
                  style={{
                    width: 18,
                    height: 15,
                    marginRight: 5
                  }}
                />
                <Text style={styles.textButton}>
                  {'Đăng Nhập'}
                </Text>
              </View>
              <View
                style={styles.signup}
                onPress={() => this.props.navigation.navigate('SignUp')}
              >
                <Image
                  source={mailIcon}
                  style={{
                    width: 18,
                    height: 15,
                    marginRight: 5
                  }}
                />
                <Text style={styles.textButton}>
                  {'Đăng Kí'}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground >
    );
  }
}

LoginScreen.navigationOptions = ({ navigation }) => ({
  headerStyle: { backgroundColor: '#01703D' },
  headerLeft: (
    <Image
      source={logoSmall}
      style={{
        marginLeft: 12,
        marginTop: 30,
        width: 80.8,
        height: 52.4
      }}
      onPress={() => { navigation.navigate('Promotion') }}
    />
  ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  information: {
    marginTop: 15,
  },
  buttonF: {
    backgroundColor: '#3B5998',
    borderRadius: 5,
    width: 300,
    height: 40,
    marginBottom: 15,
    padding: 10,
    flexDirection: 'row'
  },
  textButton: {
    fontSize: 15,
    color: 'white',
  },
  buttonG: {
    backgroundColor: '#DD4B39',
    borderRadius: 5,
    width: 300,
    height: 40,
    marginBottom: 15,
    padding: 10,
    flexDirection: 'row'
  },
  textTop: {
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  },
  content: {
    fontSize: 14,
    color: 'white'
  },
  buttonAuth: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10
  },
  buttonSocial: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  signin: {
    borderRadius: 5,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    width: 150,
    height: 40,
    padding: 10,
    flexDirection: 'row'
  },
  signup: {
    borderRadius: 5,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    width: 150,
    height: 40,
    padding: 10,
    flexDirection: 'row'
  }
});
