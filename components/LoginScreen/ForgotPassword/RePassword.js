import React, { Component } from 'react';
import { Text, Image, Keyboard, ImageBackground, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styled'

import backIcon from '../../../assets/img/back-icon.png'
import backgroundImage1 from '../../../assets/img/bg.png'

export default class RePassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newPassword: '',
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
              {'Vui lòng đặt lại mật khẩu'}
            </Text>
          </View>
          <View style={styles.information}>
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu mới"
              onChange={(e) => this._onChange(e, "newPassword")}
              autoFocus={true}
            />
            <View style={styles.highLine} />
          </View>
          <View style={[this.state.isChange ? styles.bottomAppear : styles.bottom]}>
            <Text
              style={styles.bottomText}
            >
              {'Lưu'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

RePassword.navigationOptions = ({ navigation }) => ({
  title: 'Đặt mật khẩu mới',
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
      {'Lưu'}
    </Text>
  ),
});
