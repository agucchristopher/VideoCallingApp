import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React from "react";

const OtpInput = ({ number }) => {
  return (
    <View>
      <FlatList
        data={number}
        renderItem={({ item }) => {
          return (
            <TextInput
              placeholder="h"
              style={{ width: 50, height: 50, backgroundColor: "grey" }}
            />
          );
        }}
      />
    </View>
  );
};

export default OtpInput;

const styles = StyleSheet.create({});
