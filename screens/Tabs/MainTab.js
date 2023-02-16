import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { UserContext } from "../../hooks/UuserContext";
import axios from "axios";

const MainTab = () => {
  const { data, setData, setToken } = useContext(UserContext);
  const [mentors, setMentors] = useState();

  useEffect(() => {
    async function fetchMentors() {
      const res = await axios.get("http://10.0.0.10:3000/getMentors");
      if (res.status === 200) setMentors(res.data.mentors);
      console.log(res.data.mentors);
    }
    fetchMentors();
  }, []);

  const data2 = mentors?.map((mentor) => ({
    pic: mentor.refererInfo.posterPic,
    text: `${mentor.firstName} ${mentor.lastName}-${mentor.refererInfo.companyName}`,
  }));

  const renderItem = ({ item }) => (
    <View className="p-2 px-20">
      <Image
        style={{ width: 200, height: 200, borderRadius: 35 }}
        source={{ uri: item.pic }}
      />

      <Text className="text-center">name: {item.text.split("-")[0]}</Text>
      <Text className="text-center">works at: {item.text.split("-")[1]}</Text>
    </View>
  );

  return (
    <>
      <SafeAreaView className="bg-pink-600 justify-center items-center">
        <Statusbarr style="light" />
      </SafeAreaView>
      <SafeAreaView className="justify-center items-center">
        <FlatList data={data2} renderItem={renderItem} />
        {/* <Image
          source={{ uri: data.profilePic }}
          style={{ width: 200, height: 200 }}
        /> */}
      </SafeAreaView>
    </>
  );
};

export default MainTab;
