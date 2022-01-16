import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Linking,
  Alert,
  StatusBar,
} from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";

import { RowItem, RowSeparator } from "../components/RowItem.component";

const openURL = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Sorry, something went wrong.", "Please try again later.");
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          text="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => alert("todo!")}
        />

        <RowSeparator />

        <RowItem
          text="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() =>
            openURL(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openURL("https://reactnativebyexample.com")}
        />

        <RowSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};
