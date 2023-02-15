import { View, Text, Button } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";
import { UserContext } from "../../hooks/UserContext";

export default function HomePage() {
  const { user, setUser, setToken } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView className="bg-purple justify-center">
        <Statusbarr style="light" />
      </SafeAreaView>
      <View className="bg-darkpurple flex-1 ">
        <Text className="text-pink text-center">
          Refer Her {user?.username}
        </Text>
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
