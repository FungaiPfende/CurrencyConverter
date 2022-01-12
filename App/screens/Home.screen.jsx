import React, { useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from "react-native";
import { format } from "date-fns";

import { ConversionInput } from "../components/ConversionInput.component";
import { Button } from "../components/Button.component";
import { KeyboardSpacer } from "../components/KeyboardSpacer.component";

import colors from "../constants/colors";

const screen = Dimensions.get("window");

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.89824;

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.textHeader}>Currency Converter</Text>
          <View style={styles.inputContainer}>
            <ConversionInput
              text={baseCurrency}
              value="123"
              onButtonPress={() => alert("todo!")}
              keyboardType="numeric"
              onChangeText={(text) => console.log("text", text)}
            />
            <ConversionInput
              text={quoteCurrency}
              value="123"
              editable={false}
              onButtonPress={() => alert("todo!")}
            />
          </View>
          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              new Date(),
              "MMM do, yyyy"
            )}`}
          </Text>
          <Button text="Reverse Currencies" onPress={() => alert("todo!")} />
          <KeyboardSpacer onToggle={(keyboardIsVisible) => setScrollEnabled(keyboardIsVisible)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },

  content: {
    paddingTop: screen.height * 0.2,
  },

  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },

  logoBackground: {
    width: screen.width * 0.45,
    height: screen.height * 0.25,
  },

  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },

  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    marginVertical: 20,
    textAlign: "center",
  },

  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
});
