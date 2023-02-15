import AsyncStorage, {
  useAsyncStorage,
} from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigation();
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
      else setData(null);
    } catch (e) {
      console.log("78", e);
    }
  };

  return (
    <UserContext.Provider
      value={{
        data,
        setData,
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
