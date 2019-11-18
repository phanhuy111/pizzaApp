import React, { Component } from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
  View
} from 'react-native';
import townPizza from '../assets/img/thap-nghieng-pizza.png'
import logo from '../assets/img/logo.png'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class WelcomeScreen extends Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Login');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Image
            source={logo}
            style={{
              width: width - 100,
              height: 200,
            }}
          />
        </View>
        <View style={styles.bottom}>
          <Image
            source={townPizza}
            style={{
              width: 80,
              height: 100,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#01703d',
  },
  top: {
    marginTop: 180,
    paddingTop: 20,
    marginHorizontal: 50,
  },
  bottom: {
    marginLeft: 280,
    marginTop: 200,
  }
});
