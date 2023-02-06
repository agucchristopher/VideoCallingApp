import { StyleSheet, Text, Pre, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Back = ({ title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}>
      <Ionicons
        name="arrow-back"
        size={30}
        onPress={() => navigation.goBack()}
      />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 2,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 22,
    fontFamily: "NotoSans-Bold",
    width: "90%",
    marginLeft: 0,
  },
});
