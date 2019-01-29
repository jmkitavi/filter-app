import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
 } from 'react-navigation'
 import Home from './Home'
 import Filter from './Filter'
 import Apply from './Apply'

 const AppNavigator = createStackNavigator(
   {
     Home: Home,
     Filter: Filter,
     Apply: Apply,
   },
   {
     initialRouteName: 'Home',
   }
 )

 const App = createAppContainer(AppNavigator)

 export default App