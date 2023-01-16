import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
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

  const checkUser = async () => {
    let data = await AsyncStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data?.username);
    setuser(data);
    if (!data) {
      navigation.navigate("Signin");
    }
  };
  const getUser = async () => {
    let users = await AsyncStorage.getItem("user");
    setuser(users);
    let data = user;
    return data;
  };
  const logout = async () => {
    await AsyncStorage.removeItem("user");
    setuser(null);
    checkUser();
  };
  function showUsername() {
    let username = user;
    return user?.username;
  }
  useEffect(() => {
    checkUser();
    // let username = JSON.parse(user);
    // console.log(username);
  }, []);
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
        {
          scale: withSpring(1),
        },
      ],
    };
  });
  return (
    <GestureHandlerRootView style={styles.container}>
      <PanGestureHandler onGestureEvent={gesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </PanGestureHandler>
      <Button>{showUsername()}</Button>
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
