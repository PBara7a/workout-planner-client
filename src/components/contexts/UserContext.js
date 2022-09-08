import React, { useState, useContext, useEffect } from "react";
import client from "../../utils/client";

const id = Number(localStorage.getItem(process.env.REACT_APP_USER_ID));

const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState(id);
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

  const createWorkout = async (data) => {
    try {
      await client.post("/workout", data);
    } catch (e) {
      console.error(e);
    }

    const {
      data: { workouts },
    } = await client.get(`/workout/${userId}`);

    setCollection(workouts);
  };

  const isLoggedIn = Boolean(userId);

  const updateUserId = async (userId) => setUserId(userId);

  const value = {
    userId,
    updateUserId,
    isLoggedIn,
    collection,
    createWorkout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
