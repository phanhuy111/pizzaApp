import React, { Component } from 'react';
import { Image, Text, ScrollView, View, ActivityIndicator } from 'react-native';

import styles from './styled'

import { imagePizza1 } from '../../../constants/root'

export default class AllTypeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.all}>
        {
          this.props.isLoading ? (
            <ActivityIndicator size="large" color="yellow" style={{ justifyContent: 'center', flexDirection: 'row', margin: "50%" }} />
          ) : (
              this.props.product.map((e, i) => {
                return (
                  <View style={styles.product} key={i}>
                    <View
                      style={styles.image}
                    >
                      <Image
                        source={{ uri: imagePizza1 }}
                        style={{ width: 100, height: 100, borderRadius: 5, marginLeft: 12 }}
                      />
                    </View>
                    <View style={styles.information}>
                      <Text style={styles.title}>
                        {e.title}
                      </Text>
                      <Text style={styles.content}>
                        {e.content}
                      </Text>
                      <View style={styles.line} />
                      <View style={styles.linePrice}>
                        <Text style={styles.type}>
                          {e.type}
                        </Text>
                        <Text style={styles.price}>
                          {e.price}
                        </Text>
                      </View>
                      <Text
                        style={styles.button}
                        onPress={() => this.props.toggleModal(e.bottomPizza, e.size, e.title, e.price, e.type)}
                      >
                        {'Đặt Món'}
                      </Text>
                    </View>
                  </View>
                )
              })
            )
        }
      </View>
    )
  }
}