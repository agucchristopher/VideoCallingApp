import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import Stack from "./src/navigation/";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Home } from "./src/screens";

const App = () => {
  const [fontsloaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
    "NotoSans-Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
  });

  return !fontsloaded ? (
    <>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"light-content"}
      />
      <ActivityIndicator
        color={"#FF7955"}
        style={{ alignSelf: "center", flex: 1 }}
        size={60}
      />
    </>
  ) : (
    <>
      <StatusBar
        backgroundColor={"transparent"}
        animated
        // hidden
        translucent
        barStyle={"dark-content"}
      />
      <Stack />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
