import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Loading = () => {
  const [user, setuser] = useState();
  const navigation = useNavigation();
  const checkUser = async () => {
    let data = await AsyncStorage.getItem("user");
    data = JSON.parse(data);
    setuser(data);
    console.warn(data);
    if (!data) {
      console.log("user does not exists");
      navigation.replace("Signin");
    } else {
      console.log("user exists");
      navigation.replace("Home");
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor={"transparent"}
        translucent
        barStyle={"light-content"}
      />
      <ActivityIndicator
        color={"#FF7955"}
        style={{ alignSelf: "center", flex: 1 }}
        size={60}
      />
    </>
  );
};

export default Loading;

const styles = StyleSheet.create({});
