import { View, Text } from "react-native";
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
    <SafeAreaView className="bg-purple flex-1">
      <Statusbarr style="dark" />
      <Text className="text-pink bg-darkpurple flex-auto">HomePage</Text>
    </SafeAreaView>
  );
}
