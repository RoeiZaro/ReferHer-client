import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children, data }) => {
  const navigate = useNavigation();

  const [user, setUser] = useState(data);
  const [token, setToken] = useState(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
