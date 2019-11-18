import React from 'react';
import { Image, Text, ImageBackground, View } from 'react-native';

import { logoSmall, phoneIcon, personIcon, mailIcon, dobIcon, editIcon, backgroundImage1, imageInvidual } from '../../constants/root'

import styles from './styled';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileScreen(props) {
  return (
    <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.midscreen}>
          <View style={styles.midLeft}>
            <Text
              onPress={() => props.navigation.navigate('CurrentOrder')}
            >
              {'Đơn hàng'}
            </Text>
            <Text style={styles.textNumber}>
              {'0'}
            </Text>
          </View>
          <View style={styles.midRight}>
            <Text
              onPress={() => props.navigation.navigate('HistoryOrder')}
            >
              {'Lịch sử đặt'}
            </Text>
            <Text style={styles.textNumber}>
              {'02'}
            </Text>
          </View>
        </View>
        <View style={styles.top}>
          <View style={styles.infor}>
            <Image
              source={{ uri: imageInvidual }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
              }}
            />
          </View>
          <View style={styles.us}>
            <Text style={styles.text}>
              minh huy
            </Text>
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.column}>
            <View style={styles.columLeft}>
              <Image
                source={personIcon}
                style={{
                  width: 13,
                  height: 13,
                  marginRight: 10,
                }}
              />
              <Text style={{
                color: 'white',
                paddingBottom: 5,
              }}>
                {'phan huy'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('EditProfileScreen')}
            >
              <Image
                source={editIcon}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <View style={styles.columLeft}>
              <Image
                source={dobIcon}
                style={{
                  width: 14,
                  height: 17.1,
                  marginRight: 10,
                }}
              />
              <Text style={{
                color: 'white',
                paddingBottom: 5,
              }}>
                {'23/ 04/ 1991'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('EditProfileScreen')}
            >
              <Image
                source={editIcon}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <View style={styles.columLeft}>
              <Image
                source={phoneIcon}
                style={{
                  width: 10,
                  height: 16.9,
                  marginRight: 10,
                }}
              />
              <Text style={{
                color: 'white'
              }}>
                {'0902549322'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('EditProfileScreen')}
            >
              <Image
                source={editIcon}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <View style={styles.columLeft}>
              <Image
                source={mailIcon}
                style={{
                  width: 16.1,
                  height: 13,
                  marginRight: 10,
                }}
              />
              <Text style={{
                color: 'white',
                paddingBottom: 5,
              }}>
                {'minh.nguyencao@gmail.com'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('EditProfileScreen')}
            >
              <Image
                source={editIcon}
                style={{
                  width: 15,
                  height: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {'Đăng Xuất qua Facebook'}
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: 'Cá Nhân',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 85,
  },
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

