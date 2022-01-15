import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/Home.screen'
import Options from '../screens/Options.screen'

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator>
    <MainStack.Screen name='Home' component={HomeScreen} />
    <MainStack.Screen name='Options' component={Options} />
  </MainStack.Navigator>
)

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
)