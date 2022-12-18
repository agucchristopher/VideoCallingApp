import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
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
  dropdown,
  type,
}) => {
  const [focused, setfocused] = useState(false);
  const [open, setopen] = useState(true);
  return (
    <View style={styles.root}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <Pressable style={styles.container}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, { width: type == "password" ? "85%" : "95%" }]}
          autoCapitalize="none"
          secureTextEntry={type == "password" && open}
          onBlur={onBlur}
          onFocus={onFocus}
          keyboardType={keyboardType}
        />
        {type == "password" && (
          <Ionicons
            name={open ? "eye" : "eye-off"}
            size={25}
            style={{ marginRight: 3 }}
            onPress={() => setopen(!open)}
          />
        )}
      </Pressable>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    minHeight: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "88%",
    paddingHorizontal: 10,
    borderColor: "black",
    alignSelf: "center",
    marginBottom: 5,
    elevation: 2,
    borderWidth: 1,
    marginTop: 0,
  },
  input: {
    color: "#2c2c2c",
    fontSize: 12,
    fontFamily: "NotoSans-Bold",
    marginLeft: 5,
    textDecorationColor: "white",
    borderColor: "white",
    height: "100%",
  },
  root: {
    padding: 0,
    alignContent: "center",
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
  },
  placeholder: {
    // alignSelf: "center",
    marginLeft: "10%",
    fontFamily: "NotoSans-Medium",
    fontSize: 15,
  },
});
