import React, { Component } from 'react';
import { Text, Keyboard, Image, ImageBackground, View, TouchableOpacity } from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input'

import styles from './styled'

import backIcon from '../../../assets/img/back-icon.png'
import backgroundImage1 from '../../../assets/img/bg.png'

export default class SendOtp extends Component {
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

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={styles.title}>
              {'Gửi mã OPT  thành công'}
            </Text>
            <Text style={styles.content}>
              {'BẠn vui lòng nhập mã xác thực OPT vào ô bên dưới '}
            </Text>
          </View>
          <View style={styles.information}>
            <OTPInputView
              style={styles.otpView}
              pinCount={4}
              // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
              autoFocusOnLoad={true}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
            />
            <View style={styles.lineThree}>
              <Text style={styles.lineThreeText}>
                {'Gửi lại mã OTP'}
              </Text>
            </View>
          </View>
          <View style={[this.state.isChange ? styles.bottomAppear : styles.bottom]}>
            <Text
              style={styles.bottomText}
            >
              {'Đồng ý'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

SendOtp.navigationOptions = ({ navigation }) => ({
  title: 'Nhập mã OTP',
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
  )
});