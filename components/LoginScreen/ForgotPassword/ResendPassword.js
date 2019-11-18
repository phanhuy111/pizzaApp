import React, { Component } from 'react';
import {
  Text,
  Image,
  ImageBackground,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styled'

import backIcon from '../../../assets/img/back-icon.png'
import backgroundImage1 from '../../../assets/img/bg.png'
import emailSend from '../../../assets/img/email-send.png'

export default class ResendPassword extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    }
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
              {'Gửi email mật khẩu mới thành công'}
            </Text>
            <Text style={styles.content}>
              {'Vui lòng kiểm tra mail & đặt lại mật khẩu mới.'}
            </Text>
          </View>
          <View style={styles.informationImage}>
            <Image
              source={emailSend}
              style={{ width: 170, height: 71 }}
            />
          </View>
          <View style={styles.bottom}>
            <Text
              style={styles.bottomText}
            >
              {'Trang chủ'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

ResendPassword.navigationOptions = ({ navigation }) => ({
  title: 'Quên mật khẩu?',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 60,
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
      Quay về
    </Text>
  ),
});
