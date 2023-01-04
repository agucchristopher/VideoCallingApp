import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  Modal,
  View,
  Dimensions,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Back, Button, Input } from "../../components";
import DropDownPicker from "react-native-dropdown-picker";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
const Signup = () => {
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
  const [loading, setloading] = useState(second);
  useEffect(() => {
    setloading(false);
  }, []);

  // const Signupfn = async () => {
  //   setloading(true);
  //   axios
  //     .post("http://192.168.43.30:8080/users/test", { Username, Password })
  //     .then((data) => {
  //       if (data.data.status == "success") {
  //         redirectOtp();
  //       } else {
  //         Alert.alert("Error");
  //       }
  //     });
  // };

  // const redirectOtp = () => {
  //   navigation.navigate("Signin");
  //   setloading(false);
  // };
  const [view, setview] = useState(true);
  return (
    <ScrollView style={styles.page}>
      <Text style={styles.title}> Sign Up</Text>
      <Text style={styles.subtitle}>
        Continue to create a new account and connect with people 👌🚀
      </Text>
      <Input
        onChangeText={(text) => setusername(text)}
        placeholder={"Username"}
      />
      <Input
        onChangeText={(text) => setfname(text)}
        placeholder={"First Name"}
      />
      <Input
        onChangeText={(text) => setlname(text)}
        placeholder={"Last Name"}
      />
      <Input
        onChangeText={(text) => setlname(text)}
        placeholder={"Email Address"}
        keyboardType="email-address"
      />
      <Input onChangeText={(text) => setgender(text)} placeholder={"Gender"} />
      <Input
        onChangeText={(text) => setgender(text)}
        type="dropdown"
        placeholder={"Country"}
      />
      <Input
        onChangeText={(text) => setpassword(text)}
        type="password"
        placeholder={"Password"}
      />
      <Input
        onChangeText={(text) => setpass2(text)}
        type="password"
        placeholder={"Retype Password"}
      />
      <Button
        onPress={() => navigation.navigate("InputDetails")}
        title={"Continue"}
      />
      {/* <Modal
        style={{
          // backgroundColor: "white",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          margin: 10,
          height: 200,
          // flex: 1,
        }}
        // visible={true}
        animationType="slide"
      ></Modal> */}
      {/* {view ? (
        <View
          style={{
            width: "100%",
            top: 0,
            marginBottom: 0,
          }}
        >
          <Text
            numberOfLines={3}
            style={{
              color: "grey",
              fontFamily: "NotoSans-Medium",
              margin: 5,
              letterSpacing: 1,
            }}
          >
            If you are creating a new account{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Terms And Conditons
            </Text>{" "}
            and{" "}
            <Text style={{ textDecorationLine: "underline" }}>
              Privacy Policy will apply.
            </Text>
          </Text>
        </View>
      ) : (
        ""
      )} */}
      <Pressable style={styles.sgn}>
        <Text style={[styles.sgntext, { color: "black" }]}>
          Already A User?{" "}
          <Text
            onPress={() => navigation.navigate("InputDetails")}
            style={[styles.sgntext, { margin: 0 }]}
          >
            Sign In
          </Text>
        </Text>
      </Pressable>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {
    // alignItems: 'stretch',
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    height: Dimensions.get("screen").height,
    alignContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    marginTop: 15,
    fontFamily: "NotoSans-Bold",
    fontSize: 20,
    alignSelf: "flex-start",
    marginBottom: 0,
    fontWeight: "600",
    marginLeft: 8,
  },
  subtitle: {
    marginTop: 0,
    fontFamily: "NotoSans-Medium",
    fontSize: 15,
    alignSelf: "flex-start",
    marginBottom: 0,
    lineHeight: 20,
    marginLeft: 11,
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
  sgn: {
    width: "100%",
  },
  sgntext: {
    // alignContent: "center",
    // justifyContent: "flex-end",
    fontFamily: "NotoSans-Medium",
    alignSelf: "center",
    margin: 3,
    fontSize: 13,
    color: "#FF7955",
    marginTop: "auto",
  },
});
