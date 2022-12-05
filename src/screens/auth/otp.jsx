import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Back, Button, Input } from "../../components";

const Otp = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { Phone } = route.params;
  let arr = Phone.split("");
  arr.shift();
  const newarr = arr.join("");
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
  return (
    <View style={styles.container}>
      <Back title={"Comfirm OTP"} />
      <Text style={styles.title}> An SMS code was sent to</Text>
      <Text style={styles.subtitle}>{`+234 ${newarr}`}</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.edit}> Edit Number</Text>
      </Pressable>
      <Input
        placeholder={"OTP"}
        // style={{ justifyContent: "space-evenly", letterSpacing: 20 }}
      />
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
    marginTop: 10,
    fontFamily: "NotoSans-Medium",
    fontSize: 20,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 0,
    color: "grey",
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 3,
    fontFamily: "NotoSans-Bold",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 0,
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
