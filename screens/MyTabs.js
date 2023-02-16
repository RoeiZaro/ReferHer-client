import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icons from "react-native-heroicons/solid";
import HomePage from "./PreLoginPages/HomePage";
import AboutUsPage from "./AboutUsPage";

import MainTab from "./Tabs/MainTab";
import ProfileTab from "./Tabs/ProfileTab";
import { UserContext } from "../hooks/UuserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

function Main() {
  return (
    <>
      <SafeAreaView className="bg-pink-600 justify-center">
        <StatusBar style="light" />
      </SafeAreaView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Your Notifications is empty!</Text>
      </View>
    </>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const { data } = React.useContext(UserContext);
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#FF69B4",
        tabBarInactiveTintColor: "#8A2BE2",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={MainTab}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icons.SparklesIcon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <Icons.BellIcon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icons.UserIcon name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AboutUs"
        component={AboutUsPage}
        options={{
          tabBarLabel: "About Us",
          tabBarIcon: ({ color, size }) => (
            <Icons.LightBulbIcon name="bulb" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
