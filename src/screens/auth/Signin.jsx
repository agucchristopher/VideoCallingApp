import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  // TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Linking,
  ScrollView,
  Keyboard,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import { AuthHeader, Button, Input } from "../../components";
import facebook from "../../../assets/images/facebook.jpg";
import google from "../../../assets/images/google.jpg";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import sms from "expo-sms";
import { Snackbar, TextInput } from "react-native-paper";

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
    const data = await AsyncStorage.getItem("user");
    console.log("data", data);
    setuser(JSON.parse(data));
    console.warn(user._id);
    if (user._id) {
      navigation.navigate("Home");
    }
    // return data;
  };

  const setUser = async (user) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));
  };
  // useEffect(checkUser, []);
  useEffect(() => {
    checkUser();
    setloading(false);
  }, []);

  const Signinfn = async () => {
    setloading(true);

    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      username: Username,
      password: Password,
    });

    let response = await fetch("http://192.168.43.30:8080/users/signin", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.text();
    console.log(data);
    data = JSON.parse(data);
    Alert.alert(data.status, data.message);
    let status = data.status;
    let msg = data.message;
    setmessage(data.message);
    settype(data.status);
    if (type !== "error") {
      setUser(data.user);
    }
    setloading(false);
    redirectOtp();
  };

  const redirectOtp = () => {
    // navigation.navigate("Home");
    setloading(false);
  };

  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      {message && (
        <View
          style={{
            // zIndex: 1000,
            // top: 0,
            // position: "absolute",
            height: 50,
            backgroundColor: type == "error" ? "red" : "green",
            marginTop: StatusBar.currentHeight,
            alignContent: "center",
            padding: 5,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "NotoSans-Bold",
              fontSize: 15,
            }}
          >
            {message}
          </Text>
        </View>
      )}
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>
        Sign Into Your Account, And Connect With People 🚀🚀
      </Text>
      <Text style={styles.subtitle}></Text>
      {/* <TextInput
        mode="outlined"
        label={"Username / Email"}
        outlineColor="black"
        activeOutlineColor="black"
        // outlineStyle={{ borderRadius: 0 }}
    
        onFocus={() => setview(false)}
        onBlur={() => setview(true)}
      /> */}
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
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: "43%",
            height: 2,
            borderColor: "grey",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "NotoSans-Medium",
            fontSize: 15,
            margin: 5,
            letterSpacing: 0,
            color: "grey",
          }}
        >
          OR
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: "43%",
            height: 2,
            borderColor: "grey",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignContent: "flex-start",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: "grey",
            borderWidth: 1.4,
            borderRadius: 25,
            margin: 6,
            height: 50,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Glogin")}
        >
          <Image
            source={facebook}
            resizeMode={"contain"}
            style={{
              width: 30,
              height: 50,
              marginLeft: 8,
              marginRight: 8,
              justifyContent: "center",
            }}
          />
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              width: "80%",
              fontFamily: "NotoSans-Medium",
              alignSelf: "center",
            }}
          >
            Sign In With Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "grey",
            borderWidth: 1.4,
            borderRadius: 25,
            margin: 6,
            height: 50,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          <Image
            source={google}
            resizeMode={"contain"}
            style={{
              width: 30,
              height: 50,
              marginLeft: 8,
              marginRight: 8,
              justifyContent: "center",
            }}
          />
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              width: "80%",
              fontFamily: "NotoSans-Medium",
              alignSelf: "center",
            }}
          >
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  page: {
    // alignItems: 'stretch',
    flex: 1,
    // marginTop: StatusBar.currentHeight,
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
    // alignContent: "center",
    // justifyContent: "flex-end",
    fontFamily: "NotoSans-Medium",
    alignSelf: "flex-end",
    margin: 3,
    fontSize: 13,
    color: "#FF7955",
  },
  forgot: {
    // alignContent: "flex-end",
    // justifyContent: "flex-end",
    width: "100%",
  },
  sgn: {
    width: "100%",
    marginTop: 10,
  },
  sgntext: {
    // alignContent: "center",
    // justifyContent: "flex-end",
    fontFamily: "NotoSans-Medium",
    alignSelf: "center",
    margin: 3,
    fontSize: 13,
    color: "#FF7955",
    marginTop: "auto",
  },
});

export default Signin;
