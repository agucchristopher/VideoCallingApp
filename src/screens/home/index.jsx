import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { Button } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const [user, setuser] = useState();
  const navigation = useNavigation();
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    navigation.navigate("Signin");
  };
  const checkUser = async () => {
    const data = await AsyncStorage.getItem("user");
    console.warn("data", data);
    setuser(data);
    console.warn(user._id);
    if (!user._id) {
      navigation.navigate("Signin");
    }
    // return data;
  };
  const getUser = async () => {
    let users = await AsyncStorage.getItem("user");
    setuser(users);
    console.log(user);
    // navigation.navigate("Signin");
  };
  useEffect(() => {
    checkUser();
  }, []);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const gesture = useAnimatedGestureHandler(
    {
      onStart: (event) => {},
      onActive: (event) => {
        translateX.value = event.translationX;
        translateY.value = event.translationY;
        // console.log(event.translationX);
      },
      onEnd: () => {
        // translateY.value = 0;
        if (translateX.value == -21) {
          translateX.value = 0;
        }
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
      <Button onPress={logout}>Logout</Button>
    </GestureHandlerRootView>
  );
};

export default Home;

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
