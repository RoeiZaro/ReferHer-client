import React, { useContext } from "react";
import { UserContext } from "../../hooks/UuserContext";
import MyTabs from "../MyTabs";
import HomePage from "../PreLoginPages/HomePage";
import RegisterPage from "../PreLoginPages/RegisterPage";
import LoginPage from "../PreLoginPages/LoginPage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNav = ({ data }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      {!data ? (
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
      ) : (
        <MyTabs />
      )}
    </>
  );
};

export default MainNav;
