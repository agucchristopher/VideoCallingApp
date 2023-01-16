import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const Notification = (props) => {
  let height = useSharedValue(50);
  let { type, message } = props;

  let rstyle = useAnimatedStyle(() => {
    return {
      height: withTiming(50, { duration: 2000 }),
    };
  });
  return (
    <Animated.View>
      <Animated.View
        style={{
          width: Dimensions.get("screen").width,
          zIndex: 10,
          backgroundColor: "transparent",
          opacity: 1,
          alignSelf: "center",
          flex: 1,
          top: 10,
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Animated.View
          style={[
            {
              width: 300,
              position: "absolute",
              zIndex: 1000000,
              backgroundColor: type == "error" ? "red" : "green",
              alignSelf: "center",
              justifyContent: "center",
              flex: 1,
              borderRadius: 8,
            },
            rstyle,
          ]}
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
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};
export default Notification;

const styles = StyleSheet.create({});
