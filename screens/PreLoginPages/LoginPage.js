import { View, Text, Button } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../hooks/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";

export default function LoginPage() {
  const { login } = useContext(UserContext);
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
      <Button title="Enter" onPress={() => login()}></Button>
    </SafeAreaView>
  );
}
