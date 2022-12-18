import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";

const Button = ({ title, color, loading, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {!loading ? (
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
      ) : (
        <ActivityIndicator color={"white"} size="large" />
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF7955",
    padding: 10,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    minHeight: 45,
    color: "white",
    width: "75%",
    alignSelf: "center",
    elevation: 2,
    justifyContent: "center",
  },
});
