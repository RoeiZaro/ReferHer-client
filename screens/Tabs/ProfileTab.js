import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { UserContext } from "../../hooks/UuserContext";

const ProfileTab = () => {
  const { setData, setUser, setToken } = useContext(UserContext);
  const { removeItem } = useAsyncStorage("token");

  const deleteItemfromStorage = async (newValue) => {
    await removeItem();
    setToken(null);
    setUser("nujll");
  };

  function logout() {
    deleteItemfromStorage();

    navigation.navigate("Login");
  }
  return (
    <>
      <SafeAreaView className="bg-pink-600 justify-center">
        <Statusbarr style="light" />
      </SafeAreaView>
      <View className="bg-purple-800 flex-1">
        <Button title="sign-out onPress=" />
      </View>
    </>
  );
};

export default ProfileTab;
