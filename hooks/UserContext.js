import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const login = async ({ username, password }) => {
    try {
      const res = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });
      if (res.status === 201) {
        alert("user not found");
      }
      if (res.status === 200) {
        storeData(res.data.token);
        setUser(res.data.user);
        setToken(res.data.token);
        setTimeout(() => {
          navigate("/home");
        }, 900);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
