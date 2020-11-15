import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

const RoundButton = ({ title, onPress }) => {
  return (
    <TouchableHighlight style={styles.loginButton} onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: "90%",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ffff52",
    justifyContent: "center",
    alignItems: "center",
    height: "25%",
    borderRadius: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#c8a600",
  },
});

export default RoundButton;
