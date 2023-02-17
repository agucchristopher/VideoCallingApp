import {
  FlatList,
  Keyboard,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Back, Button } from "../../components";
import { TextInput } from "react-native-gesture-handler";
import OTPInputView from "react-native-otp-input-reborn";
import { confirmOtp } from "../../services";
import FlashMessage, { showMessage } from "react-native-flash-message";

const Otp = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { mail } = route.params;
  const [nextInputIndex, setnextInputIndex] = useState(0);
  const [type, settype] = useState();
  const [message, setmessage] = useState();
  const [otp, setotp] = useState({ 0: "", 1: "", 2: "", 3: "" });
  let numbers = [1, 2, 3, 4];
  const lastinputindex = numbers.length - 1;
  const handleChangeText = (text, index) => {
    const newOTP = { ...otp };
    newOTP[index] = text;
    setotp(newOTP);
    let newIndex = getnewIndex(index, text);
    setnextInputIndex(newIndex);
    console.log(nextInputIndex);
  };

  let getnewIndex = (index, text) => {
    if (!text) {
      return index == 0 ? 0 : index - 1;
    } else {
      return index == lastinputindex ? lastinputindex : index + 1;
    }
  };
  const [timer, settimer] = useState(0);
  const countdown = () => {
    if (timer == 0) {
      setInterval(() => {
        settimer((prev) => prev + 1);
      }, 1000);
    }
    if (timer == 9) {
      settimer(0);
    }
  };
  const Resend = () => {
    if (timer <= 0) {
      countdown();
      if (timer == 9) {
        settimer(0);
      }
    } else {
      return;
    }
  };
  const clearText = () => {
    otpInput.clear();
  };
  const otpInput = useRef();
  useEffect(() => {
    if (nextInputIndex == 3) {
      otpInput.current.blur();
    }
    otpInput.current.focus();
  }, [nextInputIndex]);
  const isObjectValid = (obj) => {
    return Object.values(obj).every((val) => val.trim());
  };
  let flashref = useRef();
  const submitOtp = async () => {
    Keyboard.dismiss();
    if (isObjectValid(otp)) {
      let val = "";
      Object.values(otp).forEach((v) => {
        val += v;
      });
      let data = await confirmOtp(mail, val);
      let status = data.status;
      let msg = data.message;
      setmessage(data.message);
      settype(data.status == "error" ? "danger" : "success");
      flashref.current.showMessage({
        message: msg,
        type: data.status,
      });

      console.log(data);
    }
  };
  return (
    <View style={styles.container}>
      <Back />
      <Text style={styles.title}>Enter Code</Text>
      <Text style={styles.subtitle}>We sent a code to {mail}</Text>
      <Text style={styles.subtitle}></Text>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          horizontal
          data={[1, 2, 3, 4]}
          renderItem={({ item, index }) => {
            return (
              <TextInput
                placeholder=""
                maxLength={1}
                onChangeText={(text) => {
                  handleChangeText(text, index);
                }}
                keyboardType="number-pad"
                textAlign="center"
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "white",
                  borderWidth: 2,
                  margin: 5,
                  alignSelf: "center",
                  borderRadius: 5,
                  borderColor: "#1d1d1d",
                  alignItems: "center",
                  justifyContent: "center",
                  elevation: 3,
                }}
                ref={nextInputIndex === index ? otpInput : null}
              />
            );
          }}
        />
      </View>

      <Button onPress={() => submitOtp()} title={"Confirm"} />
      <Pressable onPress={Resend()}>
        <Text style={styles.resend}>
          {" "}
          resend code {timer > 0 ? <Text>00 : {timer}</Text> : ""}
        </Text>
      </Pressable>
      <FlashMessage
        style={{ borderRadius: 15 }}
        icon={type == "success" ? type : "danger"}
        duration={3000}
        animated
        floating
        ref={flashref}
      />
    </View>
  );
};

export default Otp;

const styles = StyleSheet.create({
  container: {
    // marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title: {
    marginTop: Platform.OS == "ios" ? 50 : 20,
    fontFamily: "NotoSans-Bold",
    fontSize: 20,
    alignSelf: "flex-start",
    marginBottom: 0,
    fontWeight: "600",
    marginLeft: 10,
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
});
