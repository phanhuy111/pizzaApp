import React from 'react';
import { ScrollView, Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';

import { logoSmall, cartIcon, backgroundImage1, imagePizza } from '../../constants/root'

import promotionIcon1 from '../../assets/img/promotion-icon.png'

import styles from './styled';

export default function PromotionScreen() {
  return (
    <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
      <ScrollView style={styles.container}>
        <View style={styles.product}>
          <View
            style={styles.image}
          >
            <Image
              source={{ uri: imagePizza }}
              style={{ width: '100%', height: 122, borderRadius: 10 }}
            />
          </View>
          <View style={styles.information}>
            <View style={styles.title}>
              <Image
                source={promotionIcon1}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 5,
                }}
              />
              <Text style={styles.textTitle}>
                {'HỨNG KHỞI VỊ HÈ'}
              </Text>
            </View>
            <Text style={styles.content}>
              Món mới từ chúng tôi: Pizza viên tôm phô mai que
            </Text>
            <Text style={styles.button}>
              Đặt Món Ngay
            </Text>
          </View>
        </View>
        <View style={styles.product}>
          <View
            style={styles.image}
          >
            <Image
              source={{ uri: imagePizza }}
              style={{ width: '100%', height: 122, borderRadius: 10 }}
            />
          </View>
          <View style={styles.information}>
            <View style={styles.title}>
              <Image
                source={promotionIcon1}
                style={{
                  width: 14,
                  height: 14,
                  marginRight: 5,
                }}
              />
              <Text style={styles.textTitle}>
                {'SUMMER PIZZA'}
              </Text>
            </View>
            <Text style={styles.content}>
              {'Cực ngon giá cực chất'}
            </Text>
            <Text style={styles.button}>
              Đặt Món Ngay
            </Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

PromotionScreen.navigationOptions = ({ navigation }) => ({
  title: 'Khuyến Mãi',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 80,
  },
  headerRight: (
    <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
      <Image
        source={cartIcon}
        style={{
          marginRight: 15,
          width: 20,
          height: 17.3
        }}
      />
    </TouchableOpacity>
  ),
  headerLeft: (
    <Image
      source={logoSmall}
      style={{
        marginLeft: 12,
        marginTop: 30,
        width: 80.8,
        height: 52.4
      }}
    />
  ),
})


