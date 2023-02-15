import { View, Text, Button,Image, TouchableOpacity} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import ImageA from "../../assets/homepagephoto.webp"
import { StatusBar as Statusbarr } from "expo-status-bar";

export default function HomePage() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <>
      <SafeAreaView className="bg-purple justify-center">
        <Statusbarr style="purple" />
      </SafeAreaView>
      <View className=" flex-1 bg-purple-800">
        <Text className="font-extrabold  text-6xl text-pink-500 bg-purple-300">ReferHer</Text>
        <View className='flex-2  flex-row flex-wrap '>
          <Image source={ImageA}style={{width: 400, height: 400}} ></Image>
          <Text className=" font-extrabold  text-3xl text-pink-500 ">Hi-tech Internal Referral Network For Women</Text>
        </View>
        <View className="flex-row flex-1 bg-purple-300 justify-around items-center">
          <TouchableOpacity  className=" bg-purple-800 w-24 h-14 rounded border-2 border-slate-600  content-center" onPress={() => navigation.navigate("Login")} ><Text className='text-white justify-center' >Login</Text></TouchableOpacity>
          <TouchableOpacity className= " bg-purple-800 w-24 h-14 rounded border-2 border-slate-600  content-center " onPress={() => navigation.navigate("Register")}><Text  className='text-white'>Register</Text></TouchableOpacity>
        </View>
      </View>
    </>
  );
}
