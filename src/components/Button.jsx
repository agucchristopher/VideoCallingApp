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

const CustomButton = ({ title, color, loading, onPress }) => {
  if (!loading) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Button
          mode="elevated"
          style={{
            width: Platform.OS == "ios" ? "100%" : "80%",
            alignSelf: "center",
            backgroundColor: "#FF7955",
            marginTop: 10,
            height: 50,
            borderRadius: 45,
            alignContent: "center",
            justifyContent: "center",
            backgroundColor: !loading ? "#FF7955" : "darkgrey",
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
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: loading ? "#FF7955" : "darkgrey",
          width: Platform.OS == "ios" ? "100%" : "80%",
        },
      ]}
      onPress={onPress}
    >
      <ActivityIndicator color={"white"} size="large" />
    </TouchableOpacity>
  );
};

export default memo(CustomButton);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF7955",
    padding: 6,
    marginVertical: 6,
    borderRadius: 30,
    alignItems: "center",
    color: "white",
    width: "100%",
    alignSelf: "center",
    elevation: 2,
    marginTop: 10,
    justifyContent: "center",
  },
});
