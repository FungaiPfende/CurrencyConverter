import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { ConversionInput } from "../components/ConversionInput.component";
import { Button } from "../components/Button.component";
import { KeyboardSpacer } from "../components/KeyboardSpacer.component";

import colors from "../constants/colors";

import { ConversionContext } from "../utils/ConversionContext";

const screen = Dimensions.get("window");

export default ({ navigation }) => {
  const [value, setValue] = useState("100");
  const { baseCurrency, quoteCurrency, swapCurrencies, rates, isLoading } =
    useContext(ConversionContext);

  const [scrollEnabled, setScrollEnabled] = useState(false);

  const conversionRate = rates[quoteCurrency];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push("Options")}>
          <Entypo name="cog" size={32} color={colors.white} />
        </TouchableOpacity>
      </SafeAreaView>

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

          {isLoading ? (
            <ActivityIndicator color={colors.white} size="large" />
          ) : (
            <>
              <View style={styles.inputContainer}>
                <ConversionInput
                  text={baseCurrency}
                  value={value}
                  onButtonPress={() =>
                    navigation.push("CurrencyList", {
                      title: "Base Currency",
                      isBaseCurrency: true,
                    })
                  }
                  keyboardType="numeric"
                  onChangeText={(text) => setValue(text)}
                />
                <ConversionInput
                  text={quoteCurrency}
                  value={
                    value &&
                    `${(parseFloat(value) * conversionRate).toFixed(2)}`
                  }
                  editable={false}
                  onButtonPress={() =>
                    navigation.push("CurrencyList", {
                      title: "Quote Currency",
                      isBaseCurrency: false,
                    })
                  }
                />
              </View>

              <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
                  new Date(),
                  "MMM do, yyyy"
                )}`}
              </Text>
              <Button
                text="Reverse Currencies"
                onPress={() => swapCurrencies()}
              />
            </>
          )}

          <KeyboardSpacer
            onToggle={(keyboardIsVisible) =>
              setScrollEnabled(keyboardIsVisible)
            }
          />
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
    paddingTop: screen.height * 0.1,
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

  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});
