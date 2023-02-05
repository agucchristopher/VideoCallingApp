import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Platform,
} from "react-native";
import React, { memo } from "react";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ title, color, loading, onPress }) => {
  if (!loading) {
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={["#01dffd", "#15aaff"]}
          // colors={["#E088FB", "#74F7FF"]}
          // start={{ x: 22, y: 77 }}
          style={[
            styles.button,
            {
              backgroundColor: !loading ? "dodgerblue" : "darkgrey",
              width: Platform.OS == "ios" ? "100%" : "90%",
            },
          ]}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "NotoSans-Medium",
            }}
          >
            {title}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={["#01dffd", "#15aaff"]}
        style={[
          styles.button,
          {
            backgroundColor: loading ? "dodgerblue" : "darkgrey",
            width: Platform.OS == "ios" ? "100%" : "95%",
          },
        ]}
        onPress={onPress}
      >
        <ActivityIndicator color={"white"} size={30} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default memo(CustomButton);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    padding: 6,
    marginVertical: 6,
    borderRadius: 25,
    alignItems: "center",
    color: "white",
    width: "100%",
    alignSelf: "center",
    elevation: 4,
    marginTop: 10,
    justifyContent: "center",
  },
});
