import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { UserContext } from "../../hooks/UuserContext";

const ProfileTab = () => {
  const { setData, setToken } = useContext(UserContext);
  const { removeItem } = useAsyncStorage("token");

  //   async () => {
  //     const galleryStatus =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     setHasGalleryPermission(galleryStatus.status === "granted");

  const deleteItemfromStorage = async (newValue) => {
    await removeItem();
    setToken(null);
    setData(null);
  };

  function logout() {
    deleteItemfromStorage();
  }
  return (
    <>
      <SafeAreaView className="bg-pink-600 justify-center">
        <Statusbarr style="light" />
      </SafeAreaView>
      <View className="bg-purple-800 flex-1">
        <View className="flex-row justify-center">
          <Button title="ProfilePic " onPress={logout} />
          <Button title="sign-out " onPress={logout} />
        </View>
      </View>
    </>
  );
};

export default ProfileTab;
