import { StyleSheet, Text, Pre, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Back = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Pressable style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={40}
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
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "NotoSans-Bold",
    width: "90%",
    marginLeft: 5,
  },
});
