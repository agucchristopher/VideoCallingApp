import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { AuthIcons, Back, Button, Input } from "../../components";
import { getotp } from "../../services";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { useNavigation } from "@react-navigation/native";

const ForgotPassword = () => {
  const [loading, setloading] = useState(false);
  const [email, setemail] = useState();
  const [message, setmessage] = useState();
  const [type, settype] = useState();
  const flashref = useRef();
  const navigation = useNavigation();
  React.useEffect(() => {
    setloading(false);
  }, []);
  const forgotpasswordfn = async () => {
    setloading(true);
    let data = await getotp(email);
    console.log(data);
    setloading(false);
    data = JSON.parse(data);
    console.log(data);
    let status = data.status;
    let msg = data.message;
    setmessage(data.message);
    settype(data.status);
    flashref.current.showMessage({
      message: msg,
      type: status == "error" ? "danger" : "success",
    });

    console.log("type", type);
    if (status !== "error") {
      setTimeout(() => {
        navigation.navigate("Otp", { mail: email });
      }, 1000);
    }
  };
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Back />
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>Continue The Steps</Text>
      <Text style={styles.subtitle}>And Recover Your Account</Text>
      <Text style={styles.subtitle}></Text>
      <Input
        value={email}
        onChangeText={(value) => {
          setemail(value);
        }}
        placeholder={"Email Address"}
        keyboardType={"email-address"}
      />
      <Button
        title={"Send Code"}
        onPress={forgotpasswordfn}
        loading={loading}
      />

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
      <FlashMessage
        style={{ borderRadius: 15 }}
        icon={type == "success" ? type : "danger"}
        duration={3000}
        ref={flashref}
        type={type}
        animated
        floating
      />
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
    color: "dodgerblue",
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
    color: "dodgerblue",
    marginTop: "auto",
  },
});
