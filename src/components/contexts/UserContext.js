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

  const collection = user ? user.workouts : [];

  const createWorkout = async (data) => {
    try {
      const {
        data: {
          data: { workout },
        },
      } = await client.post("/workout", data);

      collection.push(workout);
    } catch (e) {
      console.error(e);
    }
  };

  const isLoggedIn = Boolean(
    localStorage.getItem(process.env.REACT_APP_USER_ID)
  );

  const value = {
    user,
    setUser,
    isLoggedIn,
    collection,
    createWorkout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
