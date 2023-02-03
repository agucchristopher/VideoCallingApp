import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens";

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        style: { backgroundColor: "green" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="home"
              color={"dodgerblue"}
              size={focused ? 30 : 25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="contacts"
              color={"dodgerblue"}
              size={focused ? 30 : 25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="new"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="pluscircle"
              color={"dodgerblue"}
              size={focused ? 30 : 25}
            />
          ),
          //   title: null,
          tabBarIconStyle: { alignSelf: "center" },
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="message1"
              color={"dodgerblue"}
              size={focused ? 30 : 25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="setting"
              color={"dodgerblue"}
              size={focused ? 30 : 25}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
