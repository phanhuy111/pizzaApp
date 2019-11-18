import React, { Component } from 'react';
import { Text, Image, Keyboard, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styled'

import backIcon from '../../../assets/img/back-icon.png'
import backgroundImage1 from '../../../assets/img/bg.png'

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      switch: true,
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

  validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === true) {
      this.setState({ switch: true })
    }
    else {
      this.setState({ switch: false })
    }
  }

  _onPress = () => {
    if (this.state.switch) {
      this.props.navigation.navigate('ResendPassword')
    }
    else {
      this.props.navigation.navigate('SendOtp')
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.content}>
              {'Vui lòng điền email hoặc số điện thoại, chúng tôi sẽ gửi lại mật khẩu mới cho bạn…'}
            </Text>
          </View>
          <View style={styles.information}>
            <TextInput
              style={styles.input}
              placeholder="Email hoặc số điện thoại của bạn"
              onChangeText={(text) => this.validate(text)}
              autoFocus={true}
            />
            <View style={styles.highLine} />
          </View>
          <View style={[this.state.isChange ? styles.bottomAppear : styles.bottom]}>
            <Text
              style={styles.bottomText}
              onPress={() => this._onPress()}
            >
              {'Gửi'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

ForgotPassword.navigationOptions = ({ navigation }) => ({
  title: 'Quên mật khẩu?',
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
    }}>
      {'Gửi'}
    </Text>
  ),
});