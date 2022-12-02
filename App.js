import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Stack from "./src/navigation/";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsloaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "NotoSans-Bold": require("./assets/fonts/NotoSans-SemiBold.ttf"),
    "NotoSans-Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
  });
  useEffect(() => {
    console.log(fontsloaded);
  }, []);

  return !fontsloaded ? (
    <ActivityIndicator
      color={"dodgerblue"}
      style={{ alignSelf: "center", flex: 1 }}
      size={60}
    />
  ) : (
    <Stack />
  );
};

export default App;

const styles = StyleSheet.create({});
