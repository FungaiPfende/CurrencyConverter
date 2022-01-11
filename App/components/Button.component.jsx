import React from "react";
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native";

import colors from "../constants/colors";

export const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("../assets/images/reverse/reverse.png")}
        style={styles.buttonIcon}
        resizeMode="contain"
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },

  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
});
