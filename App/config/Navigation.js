import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home.screen";
import OptionsScreen from "../screens/Options.screen";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  // screenOptions={{ headerShown: false }}
  // initialRouteName="Options"
  >
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={OptionsScreen} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
