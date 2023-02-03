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
  Image,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Back, Button, Input } from "../../components";
// import FlashMessage, { showMessage } from "react-native-flash-message";
import DropDownPicker from "react-native-dropdown-picker";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import Notification from "../../components/Notification";
import { signup } from "../../services";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { Searchbar } from "react-native-paper";

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
  const [country, setcountry] = useState("Nigeria");
  const [showcountries, setshowcountries] = useState(false);
  const [countries, setcountries] = useState();
  let flashref = useRef();

  React.useEffect(() => {
    // Fetch countires
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        let countryData = data.map((item) => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`,
          };
        });

        setcountries(countryData);
      });
  }, []);
  useEffect(() => {
    setloading(false);
  }, []);

  const Signupfn = async () => {
    setloading(true);
    let data = await signup(
      username,
      password,
      fname,
      lname,
      email,
      country,
      gender
    );
    console.log(data);
    data = JSON.parse(data);
    console.log(data);
    let status = data.status;
    let msg = data.message;
    setmessage(data.message);
    settype(status == "error" ? "danger" : "success");
    console.log("type", type);
    flashref.current.showMessage({
      message: msg,
      type: type,
    });
    if (type !== "error") {
      redirectOtp();
    }
    // setTimeout(() => {
    //   setmessage();
    //   settype();
    // }, 3500);
    setloading(false);
  };

  const redirectOtp = () => {
    // navigation.navigate("Otp", { mail: email });
    // setloading(false);
  };
  useEffect(() => {
    showMessage({
      message: "jay jay",
    });
  }, []);

  const [view, setview] = useState(true);
  return (
    <ScrollView style={styles.page}>
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
      {/* <Input
        value={gender}
        onChangeText={(text) => setgender(text)}
        placeholder={"Gender"}
        type="dropdown"
        defaulttext={gendertext}
      /> */}
      <Input
        value={country}
        onChangeText={(text) => setcountry(text)}
        type="dropdown"
        defaulttext={countrytext}
        placeholder={"Country"}
        modal={() => setshowcountries(true)}
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

      <Modal
        onRequestClose={() => setshowcountries(false)}
        transparent
        visible={showcountries}
      >
        <View
          style={{
            backgroundColor: "#00000099",
            flex: 1,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: 300,
              alignSelf: "center",
              height: 500,
              borderRadius: 25,
            }}
          >
            <Searchbar
              style={{
                backgroundColor: "white",
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                marginBottom: 10,
              }}
              onChangeText={({ text }) => {
                let input = text;
                let data = countries.filter((data) => data.includes(input));
                console.log(data);
                setcountries(data);
              }}
            />
            <FlatList
              data={countries}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    height: 45,
                    alignItems: "center",
                    backgroundColor:
                      countrytext.toLowerCase() == item.name
                        ? "darkgrey"
                        : "white",
                    width: "80%",
                    alignSelf: "center",
                  }}
                  onPress={(item) => alert(item.name)}
                >
                  <TouchableOpacity
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{ uri: item.flag }}
                      resizeMode="cover"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 15,
                        margin: 10,
                        marginRight: 15,
                      }}
                    />
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
      <View></View>
      <FlashMessage
        style={{
          marginTop: Dimensions.get("screen").height * 0.28,
        }}
        ref={flashref}
        type={type}
        duration={3000}
      />
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "white",
    height: Dimensions.get("screen").height,
    alignContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
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
    color: "dodgerblue",
    marginTop: "auto",
  },
});
