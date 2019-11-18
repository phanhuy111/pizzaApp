import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  View,
  Text
} from 'react-native';

import backgroundImage1 from '../../assets/img/bg.png'
import bannerImage from '../../assets/img/banner.png'

const width = Dimensions.get('window').width;

export default function SuccessBookingScreen(props) {
  return (
    <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
      <View style={styles.top}>
        <Image
          source={bannerImage}
          style={{
            width: '100%',
            height: 150
          }}
        />
      </View>
      <View style={styles.mid}>
        <Text style={styles.title}>
          Đặt hàng thành công
        </Text>
        <Text style={styles.content}>
          {`Cám ơn bạn ! Mã đơn hàng của bạn là ${props.navigation.state.params.id}
  Bạn vui lòng giữ điện thoại bên mình để nhân viên liên hệ xác nhận. Đơn hàng của bạn sẽ được giao trong vòng 30 phút`}
        </Text>
      </View>
      <View style={styles.button}>
        <Text
          style={styles.bottomButon}
          onPress={() => props.navigation.navigate('ReviewBooking', { order: props.navigation.state.params })}
        >
          Xem trạng thái đơn hàng
        </Text>
      </View>
    </ImageBackground>
  );
}

SuccessBookingScreen.navigationOptions = ({ navigation }) => ({
  title: 'Đặt hàng thành công',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 60,
  },
  headerRight: (
    <Text style={{
      fontSize: 12,
      color: 'white',
      marginRight: 10,
    }}
      onPress={() => navigation.navigate('Promotion')}
    >
      Trang Chủ
    </Text>
  ),
  headerLeft: (
    null
  ),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  content: {
    color: 'white',
    fontSize: 13,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    position: 'absolute',
    bottom: 0,
  },
  bottomButon: {
    borderRadius: 5,
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    backgroundColor: '#01703D',
    width: width - 50,
    marginLeft: 25,
    height: 40,
  }
});
