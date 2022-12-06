import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
  Alert,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  SafeAreaView,
  Linking,
  ScrollView,
  Keyboard,
  Dimensions,
  Image,
} from "react-native";
import { AuthHeader, Button, Input } from "../../components";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import facebook from "../../../assets/images/facebook.jpg";
import google from "../../../assets/images/google.jpg";
import LinearGradient from "react-native-linear-gradient";
const InputNumber = () => {
  const [Phone, setPhone] = useState("");
  const [loading, setloading] = useState(false);
  const navigation = useNavigation();
  const [view, setview] = useState(true);

  useEffect(() => {
    setloading(false);
  }, []);

  const InputNumberfn = async () => {
    setloading(true);
    console.log(Phone);
    redirectOtp();
  };

  const redirectOtp = () => {
    navigation.navigate("Otp", { Phone });
    setloading(false);
  };

  return (
    <View style={styles.page}>
      <Text
        style={{
          marginTop: 40,
          fontFamily: "NotoSans-Bold",
          fontSize: 23,
          alignSelf: "center",
          marginBottom: 20,
        }}
      >
        Enter Your Number
      </Text>
      <Input
        value={Phone}
        onChangeText={(text) => {
          setPhone(text);
        }}
        onFocus={() => setview(false)}
        onBlur={() => setview(true)}
        placeholder={"Phone Number"}
        keyboardType="number-pad"
      />
      <Button
        onPress={() => {
          !loading ? InputNumberfn() : "";
        }}
        loading={loading}
        title={"Continue"}
      />

      <View
        style={{
          margin: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            borderWidth: 1,
            width: "43%",
            height: 2,
            borderColor: "grey",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontFamily: "NotoSans-Medium",
            fontSize: 18,
            margin: 5,
            letterSpacing: 0,
            color: "grey",
          }}
        >
          OR
        </Text>
        <View
          style={{
            borderWidth: 1,
            width: "43%",
            height: 2,
            borderColor: "grey",
          }}
        />
      </View>
      <View
        style={{
          flexDirection: "column",
          alignContent: "flex-start",
          justifyContent: "center",
          marginBottom: 2,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: "grey",
            borderWidth: 1.4,
            borderRadius: 25,
            margin: 6,
            height: 50,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            alignSelf: "center",
          }}
          onPress={() => navigation.navigate("Glogin")}
        >
          {/* <MaterialCommunityIcons
            name="facebook"
            size={40}
            style={{
              color: "grey",
              margin: 0,
              alignSelf: "center",
              borderWidth: 0,
              borderRadius: 30,
              padding: 5,
            }}
          /> */}
          <Image
            source={facebook}
            resizeMode={"contain"}
            style={{
              width: 30,
              height: 50,
              marginLeft: 8,
              marginRight: 8,
              justifyContent: "center",
            }}
          />
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              width: "80%",
              fontFamily: "NotoSans-Medium",
              alignSelf: "center",
            }}
          >
            Sign In With Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: "grey",
            borderWidth: 1.4,
            borderRadius: 25,
            margin: 6,
            height: 50,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          {/* <MaterialCommunityIcons
            name="google"
            size={40}
            style={{
              color: "grey",
              margin: 0,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 0,
              borderRadius: 30,
              padding: 5,
            }}
          /> */}
          <Image
            source={google}
            resizeMode={"contain"}
            style={{
              width: 30,
              height: 50,
              marginLeft: 8,
              marginRight: 8,
              justifyContent: "center",
            }}
          />
          <Text
            style={{
              color: "grey",
              fontSize: 15,
              width: "80%",
              fontFamily: "NotoSans-Medium",
              alignSelf: "center",
            }}
          >
            Sign In With Google
          </Text>
        </TouchableOpacity>
      </View>
      {view ? (
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
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 5,
    // alignItems: 'stretch',
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    height: Dimensions.get("screen").height,
  },
});

export default InputNumber;
