import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";

import HomeScreen from "../screens/Home.screen";
import OptionsScreen from "../screens/Options.screen";
import CurrencyListScreen from "../screens/CurrencyList.screen";

import { ConversionContextProvider } from "../utils/ConversionContext";

import colors from "../constants/colors";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  // screenOptions={{ headerShown: false }}
  // initialRouteName="CurrencyList"
  >
    <MainStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={OptionsScreen} />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{ presentation: "modal" }}>
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyListScreen}
      options={({ route, navigation }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={{ paddingHorizontal: 10 }}
          >
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ConversionContextProvider>
      <ModalStackScreen />
    </ConversionContextProvider>
  </NavigationContainer>
);
