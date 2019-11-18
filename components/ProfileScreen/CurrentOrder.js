import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, View, Text, TouchableOpacity } from 'react-native';

import { backIcon, backgroundImage1, width } from '../../constants/root'

export default class HistoryOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <ImageBackground source={backgroundImage1} style={{ width: '100%', height: '100%' }}>
        <View style={styles.allOrder}>
          <View style={styles.topOrder}>
            <View style={styles.labelOrder}>
              <Text style={styles.textLabel}>
                {'Chờ xác nhận'}
              </Text>
            </View>
            <View style={styles.labelOrder}>
              <Text style={styles.timeOrder}>
                {'08-10, 12:45'}
              </Text>
            </View>
          </View>
          <View style={styles.highline} />
          <View style={styles.order}>
            <Text style={styles.order}>
              {'Đơn hàng S4VVPZ12'}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

HistoryOrder.navigationOptions = ({ navigation }) => ({
  title: 'Đơn hàng của bạn',
  headerStyle: { backgroundColor: '#01703D' },
  headerTitleStyle: {
    color: 'white',
    fontSize: 18,
    marginLeft: 85,
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
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  allOrder: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: 10,
    padding: 10,
    marginVertical: 20,
    width: width - 20,
    height: 83
  },
  highline: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: width - 20,
    paddingLeft: 10,
    opacity: 0.1,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textLabel: {
    borderRadius: 5,
    backgroundColor: '#01703D',
    width: 80,
    height: 20,
    color: 'white',
    textAlign: 'center'
  },
  topOrder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  order: {
    paddingLeft: 10,
  }
});
