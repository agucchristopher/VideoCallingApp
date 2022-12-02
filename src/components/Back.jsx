import { StyleSheet, Text, Pre, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const Back = ({ title }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container}>
      <StatusBar style="auto" hidden={true} />
      <FontAwesome5
        name="arrow-left"
        size={30}
        onPress={() => navigation.goBack()}
      />
      {title ? <Text style={styles.title}>{title}</Text> : ""}
    </Pressable>
  );
};

export default Back;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    fontFamily: "Roboto-Bold",
    width: "85%",
    marginBottom: 2,
    justifyContent: "center",
    alignSelf: "center",
  },
});
