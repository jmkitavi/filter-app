import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

const shoes = {
  sex: ['womens', 'mens', 'childen'],
  size: [2, 3, 4, 5],
  color: ['blue', 'red', 'yellow', 'green'],
  type: ['casual', 'business', 'official', 'custom'],
}

const electronics = {
  phones: ['android', 'ios', 'windows'],
  television: ['samsung', 'tcl', 'sony'],
  computers: ['windows', 'mac', 'linux'],
}


const cars = {
  make: ['toyota', 'bmw', 'merc'],
  color: ['blue', 'red', 'yellow', 'green'],
  country: ['japan', 'germany', 'italy', 'usa']
}

export default class App extends Component  {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Home Native!</Text>
        <Button
          title="Shoes"
          onPress={() => this.props.navigation.navigate('Filter', { filter: shoes })}
        />
        <Button
          title="Electronics"
          onPress={() => this.props.navigation.navigate('Filter', { filter: electronics })}
        />
        <Button
          title="Cars"
          onPress={() => this.props.navigation.navigate('Filter', { filter: cars })}
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
