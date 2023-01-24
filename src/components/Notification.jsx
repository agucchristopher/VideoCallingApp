import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Notification = (props) => {
  let { type, message } = props;

  return (
    <View
      style={{
        zIndex: 10,
        alignSelf: "center",
        flex: 1,
        top: 10,
        marginTop: 20,
      }}
    >
      <View
        style={{
          width: 350,
          backgroundColor: type == "error" ? "red" : "green",
          alignSelf: "center",
          justifyContent: "center",
          flex: 1,
          borderRadius: 16,
          height: 50,
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "NotoSans-Bold",
            fontSize: 15,
            alignSelf: "center",
          }}
        >
          {message}
        </Text>
      </View>
    </View>
  );
};
export default Notification;

const styles = StyleSheet.create({});
