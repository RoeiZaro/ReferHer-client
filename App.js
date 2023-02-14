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
        <MyTabs />
      </NavigationContainer>
    );
  else
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ title: "ReferHer" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;
