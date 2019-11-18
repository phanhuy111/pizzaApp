import React, { Component } from 'react';
import { Text, Keyboard, Image, ImageBackground, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

import styles from './styled'

import backIcon from '../../../assets/img/back-icon.png'
import backgroundImage1 from '../../../assets/img/bg.png'

export default class SignUpScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      repassword: '',
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

  _signUp = () => {
    const { username, password, repassword } = this.state
    fetch('http://192.168.0.107:5000/api/auth/register', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password2: repassword
      }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.id) {
          this.props.navigation.navigate('SignIn')
        }
      })
      .catch((error) => {
        console.log("Api call error", error);
      });
  }

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.containerTop}>
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
              onSubmitEditing={() => { this.secondTextInput.focus(); }}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <View style={styles.highLine} />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              onChange={(e) => this._onChange(e, "password")}
              autoCompleteType="password"
              returnKeyType="next"
              ref={(input) => { this.secondTextInput = input; }}
              onSubmitEditing={() => { this.thirdTextInput.focus(); }}
              blurOnSubmit={false}
            />
            <View style={styles.highLine} />
            <TextInput
              style={styles.input}
              placeholder="Nhập lại mật khẩu"
              onChange={(e) => this._onChange(e, "repassword")}
              autoCompleteType="password"
              ref={(input) => { this.thirdTextInput = input; }}
              onSubmitEditing={() => { this.fourTextInput.focus(); }}
              returnKeyType="next"
              blurOnSubmit={false}
            />
            <View style={styles.highLine} />
            <TextInput
              style={styles.input}
              placeholder="Tên của bạn là"
              ref={(input) => { this.fourTextInput = input; }}
              blurOnSubmit={false}
            />
            <View style={styles.highLine} />
          </View>
        </View>
        <View style={[this.state.isChange ? styles.bottomAppear : styles.bottom]}>
          <Text
            style={styles.bottomText}
            onPress={() => {
              this._signUp();
            }}
          >
            {'Đồng ý'}
          </Text>
        </View>
      </ImageBackground >
    );
  }
}

SignUpScreen.navigationOptions = ({ navigation }) => ({
  title: 'Đăng ký mới',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 80,
  },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
    }}>
      Đồng ý
    </Text>
  ),
});

