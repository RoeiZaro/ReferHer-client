import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import MyTabs from "./screens/MyTabs";
import UserProvider from "./hooks/UserContext";

const Stack = createNativeStackNavigator();

const App = () => {
  if (0)
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
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    );
};

export default App;
