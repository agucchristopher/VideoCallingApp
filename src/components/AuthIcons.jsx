import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AuthIcons = ({ name, subtitle }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <View style={styles.socialsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Glogin")}
            style={styles.socials}
          >
            <FontAwesome5 name="facebook" size={24} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Glogin")}
            style={styles.socials}
          >
            <FontAwesome5 name="google" size={24} color="#4c8b5f" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Glogin")}
            style={styles.socials}
          >
            <FontAwesome5 name="apple" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthIcons;

const styles = StyleSheet.create({
  socialsContainer: {
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    marginBottom: 0,
    marginTop: "auto",
  },
  socials: {
    borderColor: "#DBDBDB",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 10,
  },
});
