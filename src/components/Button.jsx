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
// LinearGradient

const CustomButton = ({ title, color, loading, onPress }) => {
  if (!loading) {
    return (
      <TouchableOpacity>
        <LinearGradient
          onPress={onPress}
          colors={["dodgerblue", "#0096C7"]}
          style={[
            styles.button,
            {
              backgroundColor: !loading ? "dodgerblue" : "darkgrey",
              width: Platform.OS == "ios" ? "100%" : "80%",
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
        colors={["dodgerblue", "#0096C7"]}
        style={[
          styles.button,
          {
            backgroundColor: loading ? "dodgerblue" : "darkgrey",
            width: Platform.OS == "ios" ? "100%" : "80%",
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
    padding: 8,
    marginVertical: 6,
    borderRadius: 30,
    alignItems: "center",
    color: "white",
    width: "100%",
    alignSelf: "center",
    elevation: 2,
    marginTop: 10,
    justifyContent: "center",
  },
});
