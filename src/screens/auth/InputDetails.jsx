import { Pressable, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Back, Button, Input } from "../../components";

const InputDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Enter Your Details</Text>
      <Text style={styles.subtitle}>Details for your profile.</Text>
      <Input icon={"person"} placeholder={"First Name"} />
      <Input icon={"person"} placeholder={"Last Name"} />
      <Input icon={"mail"} placeholder={"Email Address"} />
      <Input icon={"male-female"} placeholder={"Gender"} />
      <Button
        onPress={() => navigation.navigate("InputDetails")}
        title={"Continue"}
      />
    </View>
  );
};

export default InputDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    flex: 1,
  },
  title: {
    marginTop: 40,
    fontFamily: "NotoSans-Bold",
    fontSize: 25,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginBottom: 0,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 2,
    fontFamily: "NotoSans-Medium",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: 25,
    marginBottom: 10,
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
