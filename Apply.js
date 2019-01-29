import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

const Shoes = {
  category: ['womens', 'mens', 'childen'],
  size: [2, 3, 4, 5],
  color: ['blue', 'red', 'yellow', 'green'],
}

const Clothes = {
  category: ['unisex', 'mens', 'womens'],
  size: ['x', 'xx', 'xxl'],
  type: ['casual', 'business', 'official', 'custom']
}

const Cars = {
  category: ['unisex', 'mens', 'womens'],
  size: ['x', 'xx', 'xxl'],
  type: ['casual', 'business', 'official', 'custom']
}

export default class App extends Component  {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Apply filter!</Text>
        <Button
          title="Shoes"
        />
        <Button
          title="Clothes"
        />
        <Button
          title="Cars"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
