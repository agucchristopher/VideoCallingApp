import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";

const index = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const gesture = useAnimatedGestureHandler(
    {
      onStart: (event) => {},
      onActive: (event) => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
      },
      onEnd: () => {
        translateY.value = 0;
      },
    },
    []
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
        {
          translateX: translateX.value,
        },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={gesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  box: {
    backgroundColor: "blueviolet",
    height: 80,
    width: 80,
    alignSelf: "center",
    borderRadius: 15,
  },
});
