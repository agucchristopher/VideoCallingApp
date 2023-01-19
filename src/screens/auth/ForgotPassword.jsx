import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { Button, Input } from "../../components";

const ForgotPassword = () => {
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState();
  const forgotpasswordfn = () => {
    setloading(true);
  };
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Continue The Steps And Recover Your Account 🚀🚀
      </Text>
      <Text style={styles.subtitle}></Text>
      <Input
        value={email}
        onChangeText={(value) => {
          setemail(value);
        }}
        placeholder={"Email Address"}
        keyboardType={"email-address"}
      />
      <Button title={"Recover Password"} loading={loading} />
    </ScrollView>
  );
};

export default ForgotPassword;

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
