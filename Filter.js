import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native'

export default class App extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      category: {},
      activeFilter: '',
    }
  }

  componentDidMount() {
    console.log('this this', this.props.navigation.getParam('filter'))
    this.setState({ category: this.props.navigation.getParam('filter') })
  }

  renderSection = () => {
    if (this.state.activeFilter != '') {
      return (
        
        this.state.category[this.state.activeFilter].map(item => {
          <View>
            <Text>{item}</Text>
          </View>
        )
      })
    }
    // return (
    //   <View>
    //     {!!this.state.activeFilter && this.state.category.[this.state.activeFilter].map(items => {
    //       return (
    //       )
    //     })}
    //   </View>
    // )
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            height: '100%',
            flex: 2,
            backgroundColor: 'grey',
          }}>
            {Object.keys(this.state.category).map(filter =>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    activeFilter: filter,
                  })
                }}
                style={{
                  height: 40,
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                }}>
                <Text>{filter}</Text>
              </TouchableOpacity>
            )}
        </View>
        <View
          style={{
            height: '100%',
            flex: 3,
          }}>
            <View
            style={{
              backgroundColor: 'red',
              margin: 10,
              height: 100,
            }}>
              {this.renderSection()}
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
  },
})
