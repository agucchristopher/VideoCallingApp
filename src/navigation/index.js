import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Otp,
  Home,
  Signin,
  GoogleLogin,
  Signup,
  ForgotPassword,
  Loading,
} from "../screens";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="InputDetails" component={Signup} />
        <Stack.Screen name="Glogin" component={GoogleLogin} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Fpass" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
