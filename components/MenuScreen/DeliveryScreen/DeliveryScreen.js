import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image, TextInput, Text, View, ImageBackground, TouchableOpacity, TimePickerAndroid, DatePickerAndroid
} from 'react-native';

import styles from './styled';

import { TabView, TabBar } from 'react-native-tab-view';
import Modal from "react-native-modal";

import { width, editIcon, phoneIcon, personIconGreen, backgroundImage1, cartIcon, backIcon } from '../../../constants/root'

const ShippingFood = (props) => (
  <View style={styles.all}>
    <View style={styles.address}>
      <View style={styles.top}>
        <Image
          source={personIconGreen}
          style={styles.icon}
        />
        <Text style={styles.text}>
          Hôm nay, giao ngay
        </Text>
      </View>
      <View style={styles.highLine} />
      <View style={styles.bottom}>
        <View style={styles.line}>
          <Image
            source={personIconGreen}
            style={styles.icon}
          />
          <Text style={styles.text}>
            The pizza company
          </Text>
        </View>
        <View style={styles.muldot}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>
        <TouchableOpacity onPress={() => { props.navigation.navigate('ChooseShopScreen') }}>
          <View style={styles.line}>
            <Image
              source={personIconGreen}
              style={styles.icon}
            />
            <TextInput
              style={styles.note1}
              placeholder='Chọn cửa hàng bạn sẽ đến lấy'
              value={props.shopName}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <Text style={styles.title}>
      Thông tin người nhận
    </Text>
    <View style={styles.information}>
      <View style={styles.lineMid}>
        <Image
          source={personIconGreen}
          style={styles.icon}
        />
        <Text style={styles.text}>
          {'Minh Nguyen'}
        </Text>
        <Image
          source={editIcon}
          style={styles.icon}
        />
      </View>
      <View style={styles.lineMid}>
        <Image
          source={personIconGreen}
          style={styles.icon}
        />
        <Text style={styles.text}>
          090 254 9388
        </Text>
        <Image
          source={editIcon}
          style={styles.icon}
        />
      </View>
      <View style={styles.changeInfor}>
        <Text style={styles.textButton}>
          Thay đổi thông tin người nhận
        </Text>
      </View>
    </View>
    <Text style={styles.title}>
      Ghi chú
    </Text>
    <TextInput
      style={styles.note}
      placeholder="Bạn muốn dặn dò điều gì?"
      value={props.valueNote}
    />
  </View>
);

const StoreFood = (props) => (
  <View>
    <View style={styles.all}>
      <View style={styles.address}>
        <View style={styles.top}>
          <Image
            source={personIconGreen}
            style={styles.icon}
          />
          <Text style={styles.text}>
            Hôm nay, giao ngay
        </Text>
        </View>
        <View style={styles.highLine} />
        <View style={styles.bottom}>
          <View style={styles.line}>
            <Image
              source={personIconGreen}
              style={styles.icon}
            />
            <Text style={styles.text}>
              The pizza company
          </Text>
          </View>
          <View style={styles.muldot}>
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          <View style={styles.line}>
            <Image
              source={personIconGreen}
              style={styles.icon}
            />
            <TextInput
              style={styles.note1}
              placeholder='Nhập địa chỉ của bạn'
              onChangeText={text => props.onChangeText(text)}
              value={props.location}
            />
          </View>
        </View>
      </View>
      <Text style={styles.title}>
        Thông tin người nhận
    </Text>
      <View style={styles.information}>
        <View style={styles.lineMid}>
          <Image
            source={personIconGreen}
            style={styles.icon}
          />
          <Text style={styles.text}>
            {'Minh Nguyen'}
          </Text>
          <Image
            source={editIcon}
            style={styles.icon}
          />
        </View>
        <View style={styles.lineMid}>
          <Image
            source={personIconGreen}
            style={styles.icon}
          />
          <Text style={styles.text}>
            090 254 9388
        </Text>
          <Image
            source={editIcon}
            style={styles.icon}
          />
        </View>
        <View style={styles.changeInfor}>
          <Text style={styles.textButton}>
            Thay đổi thông tin người nhận
        </Text>
        </View>
      </View>
      <Text style={styles.title}>
        Ghi chú
    </Text>
      <TextInput
        style={styles.note}
        placeholder="Bạn muốn dặn dò điều gì?"
        value={props.valueNote}
      />
    </View>
  </View>
);

export default class DeliveryScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      data: [],
      valueNote: '',
      shop: [],
      location: '',
      routes: [
        {
          key: 'first',
          title: 'Đến cửa hàng nhận',
        },
        {
          key: 'second',
          title: 'Giao hàng tận nơi',
        },
      ],
      chosenDate: new Date(),
      chosenAndroidTime: '00:00',
      androidDate: `Ngày ${new Date().getUTCDate()}-${new Date().getUTCMonth() + 1}`,
      value: 50,
      isModalVisible: false
    }
  }
  onChangeText = (text) => {
    this.setState({
      location: text
    })
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  setDateAndroid = async () => {
    try {
      const {
        action, year, month, day,
      } = await DatePickerAndroid.open({
        date: new Date(),
        minDate: new Date(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ androidDate: `Ngày ${day}-${month + 1}` });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  setTimeAndroid = async () => {
    try {
      const { action, hour, minute } = await TimePickerAndroid.open({
        hour: 14,
        minute: 0,
        is24Hour: false,
      });
      if (action !== TimePickerAndroid.dismissedAction) {
        const m = (minute < 10) ? `0${minute}` : minute;
        const h = (hour < 10) ? `0${hour}` : hour;
        this.setState({ chosenAndroidTime: `${h}:${m}` });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open time picker', message);
    }
  };


  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <ShippingFood
          valueNote={this.state.valueNote}
          navigation={this.props.navigation}
          shopName={this.props.navigation.state.params.nameShop}
        />;
      case 'second':
        return <StoreFood
          valueNote={this.state.valueNote}
          navigation={this.props.navigation}
          location={this.state.location}
          onChangeText={(text) => this.onChangeText(text)}
        />;
      default:
        return null;
    }
  };


  _renderLabel = ({ route, focused, color }) => {
    return (
      <View>
        <Text
          style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
        >
          {route.title}
        </Text>
      </View>
    )
  }


  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible
    });
  };

  _isChangeScreen = () => {
    const id = 'MHDTQ-12-324';
    const { androidDate, chosenAndroidTime } = this.state
    this.setState({
      isModalVisible: false
    })
    this.props.navigation.navigate('SuccessBookingScreen', { id: id, time: chosenAndroidTime, date: androidDate, params: this.props.navigation.state.params })
  }

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={index => this.setState({ index })}
          initialLayout={{ width: width - 24 }}
          renderTabBar={props =>
            < TabBar
              {...props}
              renderLabel={this._renderLabel}
              style={{ backgroundColor: '#01703D', textAlign: 'center', margin: 12, borderRadius: 5, }}
              indicatorStyle={{ backgroundColor: 'transparent' }}
              labelStyle={{ color: 'black', fontSize: 10 }}

            />
          }
        />
        <View style={styles.button}>
          <Text
            style={styles.order}
            onPress={this.toggleModal}
          >
            Đặt hàng
          </Text>
        </View>
        <Modal
          style={styles.bottomModal}
          isVisible={this.state.isModalVisible}
          onBackdropPress={() => this.setState({ isModalVisible: false })}
        >
          <View style={styles.totalTitle}>
            <Text style={styles.textModal}>
              Chọn thời gian giao hàng
            </Text>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, opacity: 0.1, marginLeft: 12, width: width - 24 }} />
          <View style={styles.totalText}>
            <Text style={styles.textModal}>
              {'Hôm nay'}
            </Text>
            <Text style={styles.textModal}>
              {'Giao ngay'}
            </Text>
          </View>
          <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, opacity: 0.1, marginLeft: 12, width: width - 24 }} />
          <View style={styles.lineTopModal}>
            <View style={styles.date}>
              <TouchableOpacity onPress={() => this.setDateAndroid()}>
                <Text style={styles.dateTime}>
                  {this.state.androidDate}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.time}>
              <TouchableOpacity onPress={() => this.setTimeAndroid()}>
                <Text style={styles.dateTime}>
                  {this.state.chosenAndroidTime}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonBottomModal}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
              textAlign: 'center',
              paddingTop: 10
            }}
              onPress={
                () => this._isChangeScreen()
              }
            >
              {'Xác nhận'}
            </Text>
          </View>
        </Modal>
      </ImageBackground>
    );
  }
}

DeliveryScreen.navigationOptions = ({ navigation }) => ({
  title: 'Thông tin giao hàng',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 50,
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
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Image
        source={backIcon}
        style={{
          marginLeft: 12,
          width: 19,
          height: 15
        }}
      />
    </TouchableOpacity>
  ),
})

