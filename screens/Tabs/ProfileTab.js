import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { UserContext } from "../../hooks/UuserContext";
import * as ImagePicker from "expo-image-picker";
import { FontAwesome } from "@expo/vector-icons";

const ProfileTab = () => {
  const { setData, setToken } = useContext(UserContext);
  const [image, setImage] = useState();
  const { removeItem } = useAsyncStorage("token");

  const checkPremissinon = async () => {
    const galleryStatus =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (galleryStatus.status === "granted") pickPhoto();
  };

  const pickPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

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
      <View className=" flex-1">
        <View className=" justify-around">
          <TouchableOpacity
            className="flex-row"
            onPress={() => checkPremissinon()}
          >
            <FontAwesome name="user" size={24} color="#DE3163" />
            <Text>Add Profile Picture</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-row" onPress={logout}>
            <FontAwesome name="sign-out" size={24} color="#DE3163" />
            <Text>Log-out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ProfileTab;
