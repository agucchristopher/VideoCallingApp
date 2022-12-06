import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Otp, Home, InputNumber, InputDetails, GoogleLogin } from "../screens";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="InputNumber" component={InputNumber} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="InputDetails" component={InputDetails} />
        <Stack.Screen name="Glogin" component={GoogleLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
