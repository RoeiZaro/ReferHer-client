import ImageA from "../../assets/homepagephoto.webp";

import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";
import { UserContext } from "../../hooks/UuserContext";

export default function HomePage() {
  const { user, setUser, setToken } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="bg-pink-600 justify-center">
        <Statusbarr style="light" />
      </SafeAreaView>

      <View className=" flex-1 bg-purple-800 ">
        <Text className="font-extrabold  text-6xl text-pink-500 bg-purple-300 shadow-2xl ">
          ReferHer
        </Text>
        <View className="flex-2  flex-row flex-wrap ">
          <Image source={ImageA} style={{ width: 400, height: 400 }}></Image>
          <Text className=" font-extrabold  text-3xl  text-pink-500   ">
            Hi-tech Internal Referral Network For Women
          </Text>
        </View>
        <View className="flex-row flex-1 bg-purple-300 justify-around items-center">
          <TouchableOpacity
            className=" bg-purple-800 w-24 h-14  border-2 rounded-xl border-white  items-center justify-center shadow-xl"
            onPress={() => navigation.navigate("Login")}
          >
            <Text className="text-white justify-center text-base font-bold">
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className=" bg-purple-800 w-24 h-14 rounded-xl border-2 border-white  items-center   justify-center"
            onPress={() => navigation.navigate("Register")}
          >
            <Text className="text-white justify-center text-base font-bold">
              Register
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </>
  )
}
