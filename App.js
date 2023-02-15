import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProvider from "./hooks/UserContext";
import MyTabs from "./screens/MyTabs";
import HomePage from "./screens/PreLoginPages/HomePage";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import LoginPage from "./screens/PreLoginPages/LoginPage";
import RegisterPage from "./screens/PreLoginPages/RegisterPage";
import { useEffect, useState } from "react";
import axios from "axios";

const Stack = createNativeStackNavigator();

const App = () => {
  const { getItem } = useAsyncStorage("token");
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  const readItemFromStorage = async () => {
    const item = await getItem();
    setToken(item);
  };

  useEffect(() => {
    readItemFromStorage();
  }, []);

  useEffect(() => {
    if (token) getData();
  }, [token]);

  const getData = async () => {
    try {
      const res = await axios.post("http://10.0.0.10:3000/getUser", {
        token: token,
      });

      if (res.status === 200) setData(res.data.user);
    } catch (e) {
      console.log("78", e);
    }
  };

  if (token)
    return (
      <NavigationContainer>
        <UserProvider data={data}>
          <MyTabs />
        </UserProvider>
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <UserProvider data={data}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homeee"
              component={HomePage}
              options={{ title: "Refer-Her" }}
            />
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{ title: "Login" }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterPage}
              options={{ title: "Register" }}
            />
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    );
};

export default App;
