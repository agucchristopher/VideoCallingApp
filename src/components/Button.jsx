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
            fontSize: 20,
            fontFamily: "NotoSans-Bold",
            alignSelf: "center",
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
    backgroundColor: "dodgerblue",
    padding: 10,
    marginVertical: 10,
    borderRadius: 30,
    alignItems: "center",
    height: 60,
    color: "white",
    width: "95%",
    alignSelf: "center",
  },
});
