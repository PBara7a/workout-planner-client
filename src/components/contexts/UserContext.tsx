import { useState, createContext, useContext, useEffect } from "react";
import User from "../../models/user";
import client from "../../utils/client";

const idInLocalStorage = Number(
  localStorage.getItem(
    process.env.REACT_APP_USER_ID ? process.env.REACT_APP_USER_ID : ""
  )
);

interface UserContextInterface {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextInterface | null>(null);

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode[];
}) => {
  const [user, setUser] = useState<User>();

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
    localStorage.getItem(
      process.env.REACT_APP_USER_ID ? process.env.REACT_APP_USER_ID : ""
    )
  );

  const value = {
    user,
    setUser,
    isLoggedIn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
