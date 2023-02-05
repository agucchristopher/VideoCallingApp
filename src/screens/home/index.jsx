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
import { Camera, CameraType } from "expo-camera";
const Home = () => {
  const [user, setuser] = useState();
  const [type, settype] = useState(CameraType.back);
  const [permission, resquestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    resquestPermission();
  }
  // if (!permission.granted) {
  //   alert("Error");
  // }
  function toggleCamera(params) {
    settype((current) =>
      current == CameraType.back ? CameraType.front : CameraType.back
    );
  }
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
  }, []);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const contextX = useSharedValue(0);
  const contextY = useSharedValue(0);
  const scale = useSharedValue(1);
  let value = 1;
  useEffect(() => {
    value = scale.value == 1 ? 2 : 1;
  }, []);

  const gesture = useAnimatedGestureHandler(
    {
      onStart: (event) => {
        contextX.value = event.translationX;
        contextX.value = event.translationY;
      },
      onActive: (event) => {
        translateX.value = contextX.value + event.translationX;
        translateY.value = contextY.value + event.translationY;
      },
      onEnd: (event) => {
        translateY.value = withSpring(0);
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
          scale: withSpring(value),
        },
      ],
      zIndex: 10000,
      position: "absolute",
    };
  });
  return (
    <GestureHandlerRootView
      style={{
        backgroundColor: "white",
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
      }}
    >
      {/* <View> */}

      <PanGestureHandler onGestureEvent={gesture}>
        <Animated.View style={[styles.box, animatedStyle]} />
      </PanGestureHandler>
      <Button>{showUsername()}</Button>
      <Button onPress={logout}>Logout</Button>
      <Button onPress={toggleCamera}>Toggle</Button>
      {/* </View> */}
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
