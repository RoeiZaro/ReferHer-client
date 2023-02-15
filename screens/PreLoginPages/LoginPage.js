import { View, Text, Button, TextInput, Alert } from "react-native";
import { useContext, useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../../hooks/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar as Statusbarr } from "expo-status-bar";
import { useForm, Controller } from "react-hook-form";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import axios from "axios";

export default function App() {
  const { user, setUser, setToken } = useContext(UserContext);
  const navigation = useNavigation();
  const { setItem } = useAsyncStorage("token");

  const writeItemToStorage = async (newValue) => {
    await setItem(newValue);
    setToken(newValue);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const login = async ({ username, password }) => {
    try {
      const res = await axios.post("http://10.0.0.10:3000/login", {
        username,
        password,
      });
      if (res.status === 201) {
        alert("user not found");
      }
      if (res.status === 200) {
        console.log(res.data);
        await writeItemToStorage(res.data.token);
        setUser(res.data.user);
        setTimeout(() => {
          navigation.goBack();
        }, 900);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => {
    login(data);
    console.log(data);
  };
  return (
    <SafeAreaView className="bg-purple flex-1">
      <Statusbarr style="dark" />
      <View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border-solid border-2 border-b-darkpurple mb-2 p-2 text-lg"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Username"
            />
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              className="border-solid border-2 border-b-darkpurple mb-2 p-2 text-lg"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="dd"
            />
          )}
          name="password"
        />
        {errors.password && <Text>This is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}
