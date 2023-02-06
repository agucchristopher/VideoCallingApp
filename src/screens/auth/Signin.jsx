import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Pressable,
  Text,
  Alert,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AuthHeader, AuthIcons, Button, Input } from "../../components";
import FlashMessage, { showMessage } from "react-native-flash-message";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sms from "expo-sms";
import { Dialog, Modal, Snackbar, TextInput } from "react-native-paper";
import { signin } from "../../services";

const Signin = () => {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [message, setmessage] = useState();
  const [type, settype] = useState();
  const [user, setuser] = useState();
  const [loading, setloading] = useState(false);
  const [view, setview] = useState(true);
  const navigation = useNavigation();

  const checkUser = async () => {
    let data = await AsyncStorage.getItem("user");
    data = JSON.parse(data);
    setuser(data);
    console.log("data", data);
    console.warn(data.username);
    if (data._id != null) {
      console.log("user exists");
      navigation.replace("Home");
    }
  };

  const setUser = async (user) => {
    let save = AsyncStorage.setItem("user", JSON.stringify(user));
    await save;
    console.log("svae ", save);
    navigation.navigate("Loading");
  };

  useEffect(() => {
    checkUser();
    setloading(false);
  }, []);

  const Signinfn = async () => {
    setloading(true);
    let data = await signin(Username, Password);
    console.log(data);
    data = JSON.parse(data);
    console.log(data);
    let status = data.status;
    let msg = data.message;
    setmessage(data.message);
    settype(data.status);
    showMessage({
      message: msg,
      type: status == "error" ? "danger" : "success",
    });

    console.log("type", type);
    if (type !== "error") {
      setTimeout(() => {
        setUser(data.user);
      }, 3500);
    }

    setloading(false);
  };

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign Into Your Account,</Text>
      <Text style={[styles.subtitle, { marginBottom: 20 }]}>
        And Connect With People 🚀🚀
      </Text>
      <Input
        value={Username}
        placeholder={"Username / Email"}
        style={{ marginLeft: 0 }}
        onChangeText={(text) => {
          setUsername(text);
        }}
      />
      <Input
        dropdown={true}
        value={Password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        onFocus={() => setview(false)}
        onBlur={() => setview(true)}
        placeholder={"Password"}
        type={"password"}
      />
      <Pressable
        style={styles.forgot}
        onPress={() => navigation.navigate("Fpass")}
      >
        <Text style={styles.forgottext}>Forgot Password?</Text>
      </Pressable>
      <Button
        onPress={() => {
          !loading ? Signinfn() : "";
        }}
        loading={loading}
        title={"Sign In"}
      />
      <Pressable style={styles.sgn}>
        <Text style={[styles.sgntext, { color: "black" }]}>
          New to VideoCallingApp?{" "}
          <Text
            onPress={() => navigation.navigate("InputDetails")}
            style={[styles.sgntext, { margin: 0 }]}
          >
            Register
          </Text>
        </Text>
      </Pressable>
      <Text
        style={[
          styles.subtitle,
          {
            fontSize: 15,
            alignSelf: "center",
            margin: 20,
            marginBottom: 30,
            marginTop: 30,
          },
        ]}
      >
        {" "}
        Or{" "}
      </Text>
      <AuthIcons />
      <Text style={{ alignSelf: "center", marginTop: "auto" }}> </Text>
      <FlashMessage
        style={{ borderRadius: 15 }}
        icon={type == "success" ? type : "danger"}
        duration={3000}
        animated
        floating
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    height: Dimensions.get("screen").height,
    alignContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    marginTop: Platform.OS == "ios" ? 50 : 20,
    fontFamily: "NotoSans-Bold",
    fontSize: 20,
    alignSelf: "flex-start",
    marginBottom: 0,
    fontWeight: "600",
    marginLeft: 10,
  },
  subtitle: {
    marginTop: 0,
    fontFamily: "NotoSans-Medium",
    fontSize: 15,
    alignSelf: "flex-start",
    marginBottom: 0,
    lineHeight: 20,
    marginLeft: 11,
  },
  forgottext: {
    fontFamily: "NotoSans-Medium",
    alignSelf: "flex-end",
    margin: 3,
    fontSize: 13,
    color: "dodgerblue",
  },
  forgot: {
    width: "100%",
  },
  sgn: {
    width: "100%",
    marginTop: 10,
  },
  sgntext: {
    fontFamily: "NotoSans-Medium",
    alignSelf: "center",
    margin: 3,
    fontSize: 13,
    color: "dodgerblue",
    marginTop: "auto",
  },
});

export default Signin;
