import React, { useState, useContext, useEffect } from "react";
import client from "../../utils/client";

const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    if (userId) {
      (async () => {
        const {
          data: { workouts },
        } = await client.get(`/workout/${userId}`);
        setCollection(workouts);
      })();
    }
  }, [userId]);

  const isLoggedIn = Boolean(userId);

  const updateUserId = async (userId) => setUserId(userId);

  const value = {
    userId,
    updateUserId,
    isLoggedIn,
    collection,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
