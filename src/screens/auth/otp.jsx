import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Back, Button, Input, OtpInput } from "../../components";

const Otp = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { mail } = route.params;

  const [timer, settimer] = useState(0);
  const countdown = () => {
    if (timer >= 0) {
      setInterval(() => {
        settimer((prev) => prev + 1);
      }, 1000);
    }
    if (timer >= 9) {
      settimer(0);
    }
  };
  const Resend = () => {
    if (timer <= 0) {
      countdown();
      if (timer == 9) {
        settimer(0);
      }
    } else {
      return;
    }
  };
  let number = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      {/* <Back /> */}
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Sign Into Your Account, And Connect With People 🚀🚀
      </Text>
      <Text style={styles.subtitle}></Text>
      {/* <Input
        placeholder={"OTP"}
        // style={{ justifyContent: "space-evenly", letterSpacing: 20 }}
      /> */}
      <View style={{ flexDirection: "row" }}>
        <OtpInput number={number} />
      </View>
      <Button
        onPress={() => navigation.navigate("InputDetails")}
        title={"Continue"}
      />
      <Pressable onPress={Resend()}>
        <Text style={styles.resend}>
          {" "}
          Resend Otp {timer > 0 ? <Text>00 : {timer}</Text> : ""}
        </Text>
      </Pressable>
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    flex: 1,
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
  edit: {
    color: "green",
    marginLeft: 21,
    fontFamily: "NotoSans-Medium",
    fontSize: 18,
  },
  resend: {
    color: "green",
    marginLeft: 21,
    fontFamily: "NotoSans-Medium",
    fontSize: 18,
    marginLeft: "auto",
    margin: 15,
  },
});
