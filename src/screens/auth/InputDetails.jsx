import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  Modal,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Back, Button, Input } from "../../components";
import DropDownPicker from "react-native-dropdown-picker";
import { FontAwesome } from "@expo/vector-icons";
const InputDetails = () => {
  const navigation = useNavigation();
  const second = null;
  const [username, setusername] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [email, setemail] = useState();
  const [gender, setgender] = useState();
  const [password, setpassword] = useState();
  const [pass2, setpass2] = useState();
  const [error, seterror] = useState(second);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> Sign Up</Text>
      <Text style={styles.subtitle}>Details for your profile.</Text>
      <Input placeholder={"Username"} />
      <Input placeholder={"First Name"} />
      <Input placeholder={"Last Name"} />
      <Input placeholder={"Email Address"} keyboardType="email-address" />
      <Input placeholder={"Gender"} />
      <Input type="password" placeholder={"Password"} />
      <Input type="password" placeholder={"Retype Password"} />
      <Button
        onPress={() => navigation.navigate("InputDetails")}
        title={"Continue"}
      />
      <Modal
        style={{
          // backgroundColor: "white",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          margin: 10,
          height: 200,
          // flex: 1,
        }}
        transparent={true}
        visible={false}
        animationType="slide"
      >
        <View
          style={{
            width: "75%",
            height: 255,
            backgroundColor: "white",
            alignSelf: "center",
            alignContent: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <Text>Error Header</Text>
          <Text>Image</Text>
          <Text>Details</Text>
          <Button title={"Ok"} />
        </View>
      </Modal>
    </ScrollView>
  );
};

export default InputDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    marginTop: 40,
    fontFamily: "NotoSans-Bold",
    fontSize: 25,
    alignSelf: "flex-start",
    marginBottom: 0,
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 2,
    fontFamily: "NotoSans-Medium",
    fontSize: 18,
    alignSelf: "flex-start",
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
