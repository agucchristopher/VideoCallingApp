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
import Notification from "../../components/Notification";
import { signup } from "../../services";
const Signup = () => {
  const navigation = useNavigation();
  const second = null;
  const [username, setusername] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [email, setemail] = useState();

  const [password, setpassword] = useState();

  const [pass2, setpass2] = useState();
  const [error, seterror] = useState(second);
  const [message, setmessage] = useState(second);
  const [type, settype] = useState(second);
  const [loading, setloading] = useState(second);
  const [gendertext, setgendertext] = useState("Male");
  const [countrytext, setcountrytext] = useState("Nigeria");
  const [gender, setgender] = useState();
  const [country, setcountry] = useState(second);
  useEffect(() => {
    setloading(false);
  }, []);

  const Signupfn = async () => {
    setloading(true);
    let data = signup(username, password, fname, lname, email, country, gender);
    console.log(data);
    data = JSON.parse(data);
    console.log(data);
    let status = data.status;
    let msg = data.message;
    setmessage(data.message);
    settype(data.status);
    if (type !== "error") {
      console.log("alright");
    }
    setTimeout(() => {
      setmessage();
      settype();
    }, 3500);
    setloading(false);
  };

  const redirectOtp = () => {
    navigation.navigate("Signin");
    setloading(false);
  };
  const [view, setview] = useState(true);
  return (
    <ScrollView style={styles.page}>
      {message && <Notification message={message} />}
      <Text style={styles.title}> Sign Up</Text>
      <Text style={styles.subtitle}>
        Continue to create a new account and connect with people 👌🚀
      </Text>
      <Input
        value={username}
        onChangeText={(text) => setusername(text)}
        placeholder={"Username"}
      />
      <Input
        value={fname}
        onChangeText={(text) => setfname(text)}
        placeholder={"First Name"}
      />
      <Input
        value={lname}
        onChangeText={(text) => setlname(text)}
        placeholder={"Last Name"}
      />
      <Input
        value={email}
        onChangeText={(text) => setemail(text)}
        placeholder={"Email Address"}
        keyboardType="email-address"
      />
      <Input
        value={gender}
        onChangeText={(text) => setgender(text)}
        placeholder={"Gender"}
        type="dropdown"
        defaulttext={gendertext}
      />
      <Input
        value={country}
        onChangeText={(text) => setcountry(text)}
        type="dropdown"
        defaulttext={countrytext}
        placeholder={"Country"}
      />
      <Input
        value={password}
        onChangeText={(text) => setpassword(text)}
        type="password"
        placeholder={"Password"}
      />
      <Input
        value={pass2}
        onChangeText={(text) => setpass2(text)}
        type="password"
        placeholder={"Retype Password"}
      />
      <Button onPress={Signupfn} title={"Sign Up"} loading={loading} />
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
