import React, { Component } from 'react';
import { TextInput, StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';

import { backIcon, personIconGreen, mailIconGreen, phoneIconGreen, dobGreen, backgroundImage1, width } from '../../constants/root'

export default class EditProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'minh nguyen',
      birth: '23/ 04/ 1991',
      phone: '0902549322',
      mail: 'minh.nguyencao@gmail.com'
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.allInfor}>
          <View style={styles.lineInfor}>
            <Image
              source={personIconGreen}
              style={{ width: 13, height: 13 }}
            />
            <TextInput
              style={styles.inputInfor}
              value={this.state.name}
            />
          </View>
          <View style={styles.highline} />
          <View style={styles.lineInfor}>
            <Image
              source={dobGreen}
              style={{ width: 14, height: 17 }}
            />
            <TextInput
              style={styles.inputInfor}
              value={this.state.birth}
            />
          </View>
          <View style={styles.highline} />
          <View style={styles.lineInfor}>
            <Image
              source={phoneIconGreen}
              style={{ width: 10, height: 16 }}
            />
            <TextInput
              style={styles.inputInfor}
              value={this.state.phone}
            />
          </View>
          <View style={styles.highline} />
          <View style={styles.lineInfor}>
            <Image
              source={mailIconGreen}
              style={{ width: 16, height: 13 }}
            />
            <TextInput
              style={styles.inputInfor}
              value={this.state.mail}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

EditProfileScreen.navigationOptions = ({ navigation }) => ({
  title: 'Thông tin cá nhân',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 70,
  },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image
        source={backIcon}
        style={{
          marginLeft: 12,
          marginTop: 5,
          width: 19,
          height: 15
        }}
      />
    </TouchableOpacity>
  ),
  headerRight: (
    <Text style={{
      fontSize: 12,
      color: 'white',
      marginRight: 10,
    }}
      onPress={() => navigation.navigate('Profile')}
    >
      {'Lưu'}
    </Text>
  )
})

const styles = StyleSheet.create({
  allInfor: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
    marginVertical: 20,
    width: width - 20,
    height: 180
  },
  highline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: width - 20,
    paddingLeft: 10,
    opacity: 0.1
  },
  lineInfor: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 15,
  },
  inputInfor: {
    height: 15,
    paddingLeft: 20,
  }
});
