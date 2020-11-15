// import { StatusBar } from 'expo-status-bar';
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import RoundButton from "./components/RoundButton";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={0.25}
        style={styles.backgroundImage}
        source={require("./assets/images/sushi.jpg")}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Text>Top</Text>
        </SafeAreaView>
        <RoundButton title="Login" onPress={() => console.log("login")} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
