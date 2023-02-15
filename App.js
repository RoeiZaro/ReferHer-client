import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProvider from "./hooks/UserContext";
import MyTabs from "./screens/MyTabs";
import HomePage from "./screens/PreLoginPages/HomePage"
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginPage from "./screens/PreLoginPages/LoginPage";
import RegisterPage from "./screens/PreLoginPages/RegisterPage"


const Stack = createNativeStackNavigator();

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem("token");
    if (value !== null) {
      return value;
    }
  } catch (e) {
    console.log(e);
  }
};

const IsloggedIn = getData();
console.log(IsloggedIn._x);

const App = () => {
  if (1)
    return (
      <NavigationContainer>
        <UserProvider>
          <MyTabs />
        </UserProvider>
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <UserProvider>
          <Stack.Navigator>
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
