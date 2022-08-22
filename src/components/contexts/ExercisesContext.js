import React, { useState, useEffect, useContext } from "react";

const ExercisesContext = React.createContext();

export const useExercises = () => useContext(ExercisesContext);

export const ExercisesContextProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4040/exercises");
      const data = await response.json();
      setExercises(data.data);
    })();
  }, []);

  const value = {
    exercises,
  };

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
};
