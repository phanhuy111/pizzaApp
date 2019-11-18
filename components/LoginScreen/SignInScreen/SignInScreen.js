import React, { Component } from 'react';
import { Text, Image, Keyboard, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styled'

import backIcon from '../../../assets/img/back-icon.png'
import backgroundImage1 from '../../../assets/img/bg.png'

export default class SignInScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      isChange: false
    }
  }

  componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  }

  _keyboardDidShow = () => {
    this.setState({
      isChange: true
    })
  }

  _keyboardDidHide = () => {
    this.setState({
      isChange: false
    })
  }

  _onChange = (e, name) => {
    this.setState({
      [name]: e.nativeEvent.text
    });
  }

  _signIn = () => {
    const { username, password } = this.state
    fetch('http://192.168.0.107:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          name: json.username,
        })
        if (json.id) {
          this.props.navigation.navigate('Menu')
        }
      })
      .catch((error) => {
        console.log("Api call error", error);
      });
  }


  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.title}>
              {'Xin chào'}
            </Text>
            <Text style={styles.content}>
              {'Vui lòng điền thêm thông tin để trở thành khách hàng của chúng tôi nhé.'}
            </Text>
          </View>
          <View style={styles.information}>
            <TextInput
              style={styles.input}
              placeholder="Email hoặc số điện thoại của bạn"
              onChange={(e) => this._onChange(e, "username")}
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
              blurOnSubmit={false}
            />
            <View style={styles.highLine} />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              autoCompleteType="password"
              ref={(input) => { this.secondTextInput = input; }}
              onChange={(e) => this._onChange(e, "password")}
            />
            <View style={styles.highLine} />
            <View style={styles.lineThree}>
              <Text
                style={styles.lineThreeText}
                onPress={() => { this.props.navigation.navigate('ForgotPassword') }}
              >
                {'Quên mật khẩu ?'}
              </Text>
              <Text
                style={styles.lineThreeText}
                onPress={() => this.props.navigation.navigate('SignUp')}
              >
                {'Đăng ký mới'}
              </Text>
            </View>
          </View>
          <View style={[this.state.isChange ? styles.bottomAppear : styles.bottom]}>
            <Text
              style={styles.bottomText}
              onPress={() => {
                this._signIn();
              }}
            >
              {'Đồng ý'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

SignInScreen.navigationOptions = ({ navigation }) => ({
  title: 'Đăng nhập',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 80,
  },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image
        source={backIcon}
        style={{
          marginLeft: 12,
          width: 16,
          height: 16
        }}
      />
    </TouchableOpacity>
  ),
  headerRight: (
    <Text style={{
      fontSize: 14,
      fontWeight: 'bold',
      marginRight: 10,
      color: 'white'
    }}
    >
      Đồng ý
    </Text>
  ),
});

