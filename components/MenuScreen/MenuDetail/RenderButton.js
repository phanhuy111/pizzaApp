import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styled';

export default class RenderButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Text
        style={[this.props.isChoose ? styles.buttonOrderChoose : styles.buttonOrder]}
        onPress={() => this.props._chooseButton(this.props.code, this.props.name, this.props.index)}
        key={this.props.index}
      >
        {this.props.name}
      </Text>
    );
  }
}

