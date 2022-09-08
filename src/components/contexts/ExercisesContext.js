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
    workouts: [],
  });

  useEffect(() => {
    (async () => {
      const { data } = await client.get("/data");
      const {
        data: { workouts },
      } = await client.get("/workout/1");

      data.workouts = workouts;

      setExerciseData(data);
    })();
  }, []);

  return (
    <ExercisesContext.Provider value={{ ...exerciseData }}>
      {children}
    </ExercisesContext.Provider>
  );
};
