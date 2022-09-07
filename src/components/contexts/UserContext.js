import React, { useState, useContext } from "react";

const UserContext = React.createContext();

export const useUser = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [userId, setUserId] = useState();

  const isLoggedIn = Boolean(userId);

  const updateUserId = async (userId) => setUserId(userId);

  return (
    <UserContext.Provider value={{ userId, updateUserId, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};
