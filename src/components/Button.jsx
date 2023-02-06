import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  Platform,
} from "react-native";
import React, { memo } from "react";
import { Button } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const CustomButton = ({ title, color, loading, onPress }) => {
  if (!loading) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Pressable
          onPress={onPress}
          style={[
            styles.button,
            {
              width: Platform.OS == "ios" ? "100%" : "93%",
            },
          ]}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              fontFamily: "NotoSans-Medium",
            }}
          >
            {title}
          </Text>
        </Pressable>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={onPress}>
      <Pressable
        style={[
          styles.button,
          {
            width: Platform.OS == "ios" ? "100%" : "90%",
            backgroundColor: "darkgrey",
          },
        ]}
      >
        <Text
          style={{
            color: "white",
            fontSize: 15,
            fontFamily: "NotoSans-Medium",
          }}
        >
          {title}..
        </Text>
      </Pressable>
    </TouchableOpacity>
  );
  // return (
  //   <TouchableOpacity>
  //     <LinearGradient
  //       // colors={["#01dffd", "#15aaff"]}
  //       colors={["#fff", "white"]}
  //       style={[
  //         styles.button,
  //         {
  //           // backgroundColor: loading ? "dodgerblue" : "darkgrey",
  //           width: Platform.OS == "ios" ? "100%" : "90%",
  //           borderColor: "white",
  //           borderWidth: 0,
  //         },
  //       ]}
  //       onPress={onPress}
  //     >
  //       <ActivityIndicator color={"dodgerblue"} size={40} />
  //     </LinearGradient>
  //   </TouchableOpacity>
  // );
};

export default memo(CustomButton);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "dodgerblue",
    padding: 6,
    marginVertical: 6,
    borderRadius: 25,
    alignItems: "center",
    color: "white",
    width: "100%",
    alignSelf: "center",
    marginTop: 15,
    justifyContent: "center",
    borderColor: "dodgerblue",
    fontFamily: "NotoSans-Medium",
    elevation: 2,
  },
});
