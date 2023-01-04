import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
} from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const CustomButton = ({ title, color, loading, onPress }) => {
  return (
    // <TouchableOpacity style={styles.button} onPress={onPress}>
    //   {!loading ? (
    //
    //   ) : (
    //     <ActivityIndicator color={"white"} size="large" />
    //   )}
    // </TouchableOpacity>
    <Pressable onPress={onPress}>
      <Button
        mode="contained"
        // onPress={onPress}
        style={{
          width: "75%",
          alignSelf: "center",
          backgroundColor: "#FF7955",
          marginTop: 10,
          height: 50,
          borderRadius: 45,
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "NotoSans-Bold",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          {title}
        </Text>
      </Button>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF7955",
    // padding: 10,
    // marginVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    // minHeight: 40,
    color: "white",
    width: "75%",
    alignSelf: "center",
    elevation: 2,
    marginTop: 10,
    // justifyContent: "center",
    // marginBottom: 5,
  },
});
