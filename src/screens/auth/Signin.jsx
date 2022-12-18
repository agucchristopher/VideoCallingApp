import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
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
} from "react-native";
import { AuthHeader, Button, Input } from "../../components";
import facebook from "../../../assets/images/facebook.jpg";
import google from "../../../assets/images/google.jpg";
const Signin = () => {
  const [Password, setPassword] = useState("");
  const [Username, setUsername] = useState("");
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();
  const [view, setview] = useState(true);

  useEffect(() => {
    setloading(false);
  }, []);

  const Signupfn = async () => {
    setloading(true);
    console.log(Username);
    redirectOtp();
  };

  const redirectOtp = () => {
    navigation.navigate("InputDetails");
    setloading(false);
  };

  return (
    <ScrollView style={styles.page}>
      <Text style={styles.title}>Sign In</Text>
      <Text style={styles.subtitle}>Sign Into Your Account</Text>
      <Text style={styles.subtitle}>And Connect With People 🚀🚀</Text>
      <Input
        dropdown={true}
        value={Username}
        onChangeText={(text) => {
          setUsername(text);
        }}
        icon="caret-down"
        onFocus={() => setview(false)}
        onBlur={() => setview(true)}
        placeholder={"Username / Email"}
      />
      <Input
        dropdown={true}
        value={Password}
        onChangeText={(text) => {
          setPassword(text);
        }}
        icon="caret-down"
        onFocus={() => setview(false)}
        onBlur={() => setview(true)}
        placeholder={"Password"}
        secureTextEntry
        type={"password"}
      />
      <Button
        onPress={() => {
          !loading ? Signupfn() : "";
        }}
        loading={loading}
        title={"Sign In"}
      />
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
          {/* <MaterialCommunityIcons
            name="facebook"
            size={40}
            style={{
              color: "grey",
              margin: 0,
              alignSelf: "center",
              borderWidth: 0,
              borderRadius: 30,
              padding: 5,
            }}
          /> */}
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
          {/* <MaterialCommunityIcons
            name="google"
            size={40}
            style={{
              color: "grey",
              margin: 0,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0,
              borderRadius: 30,
              padding: 5,
            }}
          /> */}
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
      {view ? (
        <View
          style={{
            width: "100%",
            top: 0,
            marginBottom: 0,
          }}
        >
          <Text
            numberOfLines={3}
            style={{
              color: "grey",
              fontFamily: "NotoSans-Medium",
              margin: 5,
              letterSpacing: 1,
            }}
          >
            If you are creating a new account{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Terms And Conditons
            </Text>{" "}
            and{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Privacy Policy will apply.
            </Text>
          </Text>
        </View>
      ) : (
        ""
      )}
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
    paddingLeft: 2,
  },
  title: {
    marginTop: 40,
    fontFamily: "NotoSans-Bold",
    fontSize: 25,
    alignSelf: "flex-start",
    marginBottom: 0,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 0,
    fontFamily: "NotoSans-Medium",
    fontSize: 18,
    alignSelf: "flex-start",
    marginBottom: 0,
    lineHeight: 20,
  },
});

export default Signin;
