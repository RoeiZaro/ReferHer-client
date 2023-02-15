import { View, Text, Button } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <Statusbarr style="light" />
      </SafeAreaView>
      <View className="bg-darkpurple flex-1 ">
        <Text className="text-pink text-center">Refer Her</Text>
        <View className="flex-row  justify-around mt-auto pb-1">
          <Button title="Login" onPress={() => navigation.navigate("Login")} />
          <Button
            title="Register"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </>
  );
}
