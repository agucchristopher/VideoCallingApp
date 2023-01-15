import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import { Ionicons } from "react-native-vector-icons";
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
  error,
}) => {
  const [focused, setfocused] = useState(false);
  const [open, setopen] = useState(true);
  return (
    // <View style={[styles.root, style]}>
    //   <Text style={styles.placeholder}>{placeholder}</Text>
    //   <Pressable style={styles.container}>
    //     {type == "" ||
    //       (type != "dropdown" ? (
    //         <TextInput
    //           value={value}
    //           onChangeText={onChangeText}
    //           style={[
    //             styles.input,
    //             { width: type == "password" ? "85%" : "95%" },
    //           ]}
    //           autoCapitalize="none"
    //           secureTextEntry={type == "password" && open}
    //           onBlur={onBlur}
    //           onFocus={onFocus}
    //           keyboardType={keyboardType}
    //         />
    //       ) : (
    //         <Text style={styles.dropdowntext}>{"Nigeria"}</Text>
    //       ))}
    //     {type == "password" ? (
    //       <Ionicons
    //         name={open ? "eye" : "eye-off"}
    //         size={26}
    //         style={{ marginRight: 3 }}
    //         color="#121212"
    //         onPress={() => setopen(!open)}
    //       />
    //     ) : type == "dropdown" ? (
    //       <Ionicons
    //         name={open ? "caret-down" : "caret-down"}
    //         size={26}
    //         style={{ marginRight: 0 }}
    //         color="#121212"
    //         onPress={() => setopen(!open)}
    //       />
    //     ) : (
    //       ""
    //     )}
    //   </Pressable>
    // </View>
    <View style={styles.container}>
      <Text style={styles.placeholder}>{placeholder}</Text>
      <TextInput
        mode="outlined"
        // label={placeholder}
        secureTextEntry={type == "password" ? open : false}
        keyboardType={keyboardType}
        outlineColor="black"
        activeOutlineColor="black"
        right={
          <Pressable>
            <Ionicons
              name={open ? "eye" : "eye-off"}
              size={26}
              style={{ marginRight: 3, zIndex: 1000 }}
              color="black"
              onPress={() => setopen(!open)}
            />
          </Pressable>
        }
        error={error}
        outlineStyle={{ borderRadius: 25 }}
        onChangeText={onChangeText}
        // onFocus={() => setview(false)}
        // onBlur={() => setview(true)}
      />
    </View>
  );
};

export default Input;

{
  /* <TouchableOpacity
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
</TouchableOpacity> */
}
const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    // minHeight: 50,
    // alignItems: "center",
    // justifyContent: "space-evenly",
    width: "99%",
    paddingHorizontal: 10,
    // borderColor: "#1d1d1d",
    alignSelf: "center",
    marginBottom: 3,
    // elevation: 2,
    // marginTop: 0,
    // borderWidth: 1.4,
    // borderRadius: 30,
    // margin: 0,
  },
  input: {
    color: "#2c2c2c",
    fontSize: 14,
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
    marginLeft: 15,
    fontFamily: "NotoSans-Medium",
    fontSize: 15,
  },
  dropdowntext: {
    color: "#2c2c2c",
    fontSize: 14,
    fontFamily: "NotoSans-Bold",
    marginLeft: 5,
    textDecorationColor: "white",
    borderColor: "white",
    // height: "100%",
    alignSelf: "center",
    width: "80%",
    justifyContent: "center",
  },
});
