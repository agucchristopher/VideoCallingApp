import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const Input = ({
  value,
  password,
  placeholder,
  onChangeText,
  style,
  secureTextEntry,
  icon,
  keyboardType,
  onBlur,
  onFocus,
  AutoCapitalize,
}) => {
  return (
    <Pressable onPress={() => console.warn("Hey")} style={styles.container}>
      {icon ? <Ionicons name={icon} size={25} style={styles.icon} /> : ""}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, style]}
        autoCapitalize="none"
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </Pressable>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 0,
    backgroundColor: "white",
    height: 60,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderColor: "white",
    alignSelf: "center",
    marginBottom: 8,
    elevation: 2,
  },
  icon: {
    margin: 3,
    alignSelf: "center",
    width: "10%",
    color: "grey",
  },
  input: {
    width: "90%",
    color: "balck",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    marginLeft: 5,
    letterSpacing: 2,
    textDecorationColor: "white",
    borderColor: "white",
    height: "100%",
  },
});
