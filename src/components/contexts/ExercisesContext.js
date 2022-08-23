import React, { useState, useEffect, useContext } from "react";

const ExercisesContext = React.createContext();

export const useExercises = () => useContext(ExercisesContext);

export const ExercisesContextProvider = ({ children }) => {
  const [exerciseData, setExerciseData] = useState({
    exercises: [],
    targets: [],
    bodyparts: [],
    equipments: [],
  });

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4040/data");
      const data = await response.json();

      setExerciseData(data);
    })();
  }, []);

  return (
    <ExercisesContext.Provider value={exerciseData}>
      {children}
    </ExercisesContext.Provider>
  );
};
