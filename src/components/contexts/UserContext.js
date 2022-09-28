import React, { useState, useContext, useEffect } from "react";
import client from "../../utils/client";

const idInLocalStorage = Number(
  localStorage.getItem(process.env.REACT_APP_USER_ID)
);

const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    if (idInLocalStorage) {
      (async () => {
        const {
          data: { data },
        } = await client.get(`/user/${idInLocalStorage}`);

        setUser(data.user);
      })();
    }
  }, []);

  const isLoggedIn = Boolean(
    localStorage.getItem(process.env.REACT_APP_USER_ID)
  );

  const value = {
    user,
    setUser,
    isLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
