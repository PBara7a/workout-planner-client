import React, { useState, useEffect, useContext } from "react";
import client from "../../utils/client";

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
      const { data } = await client.get("/data");

      setExerciseData(data);
    })();
  }, []);

  return (
    <ExercisesContext.Provider value={exerciseData}>
      {children}
    </ExercisesContext.Provider>
  );
};
