import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  TouchableOpacity
} from 'react-native';

import bannerImage from '../assets/img/banner.png'
import backIcon from '../assets/img/back-icon.png'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function LoginScreen() {
  return (
    <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.textContent}>
          <Text style={styles.title}>
            Xin Chào
          </Text>
          <Text style={styles.content}>
            Vui lòng nhập thông tin đăng nhập
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

LoginEmail.navigationOptions = ({ navigation }) => ({
  title: 'Đăng Nhập',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 80,
  },
  headerRight: (
    <Text
      style={{
        fontSize: 15,
      }}
    >
      Đồng Ý
    </Text>
  ),
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image
        source={backIcon}
        style={{
          marginLeft: 12,
          marginTop: 30,
          width: 80.8,
          height: 52.4
        }}
      />
    </TouchableOpacity>
  ),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
});
