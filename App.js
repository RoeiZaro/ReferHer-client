import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserProvider from "./hooks/UuserContext";
import MyTabs from "./screens/MyTabs";
import HomePage from "./screens/PreLoginPages/HomePage";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import LoginPage from "./screens/PreLoginPages/LoginPage";
import RegisterPage from "./screens/PreLoginPages/RegisterPage";
import { useEffect, useState } from "react";
import axios from "axios";
import MainNav from "./screens/Navigate/MainNav";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <UserProvider>
        <MainNav />
      </UserProvider>
    </NavigationContainer>
  );

  // if (token)
  // return (
  //   <NavigationContainer>
  //     <UserProvider data={data}>
  //       <MyTabs />
  //     </UserProvider>
  //   </NavigationContainer>
  // );
  // else
  //   return (
  //     <NavigationContainer>
  //       <UserProvider data={data}>
  //         <Stack.Navigator screenOptions={{ headerShown: false }}>
  //           <Stack.Screen
  //             name="Homeee"
  //             component={HomePage}
  //             options={{ title: "Refer-Her" }}
  //           />
  //           <Stack.Screen
  //             name="Login"
  //             component={LoginPage}
  //             options={{ title: "Login" }}
  //           />
  //           <Stack.Screen
  //             name="Register"
  //             component={RegisterPage}
  //             options={{ title: "Register" }}
  //           />
  //         </Stack.Navigator>
  //       </UserProvider>
  //     </NavigationContainer>
  // );
};

export default App;
