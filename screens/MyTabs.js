import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icons from "react-native-heroicons/solid";
import HomePage from "./PreLoginPages/HomePage";
import AboutUsPage from "./AboutUsPage";
import { UserContext } from "../hooks/UserContext";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function AboutUs() {
  return (
    <AboutUsPage/>
  );
}

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icons.SparklesIcon name="home" color={color} size={size} />
          ),
        }}
      />

        <Tab.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          tabBarLabel:'About Us',
          tabBarIcon:({color,size})=>(
            <Icons.LightBulbIcon name='bulb' color={color} size={size}/>
          ),
        }}
        />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <Icons.BellIcon name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Icons.UserIcon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
