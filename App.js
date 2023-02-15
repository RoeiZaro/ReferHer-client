import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./screens/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyTabs from "./screens/MyTabs";

const Stack = createNativeStackNavigator();

const App = () => {
  if (0)
    return (
      <NavigationContainer>
        <userProvider>
          <MyTabs />
        </userProvider>
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <userProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Homeee"
              component={HomePage}
              options={{ title: "Refer-Her" }}
            />
          </Stack.Navigator>
        </userProvider>
      </NavigationContainer>
    );
};

export default App;
