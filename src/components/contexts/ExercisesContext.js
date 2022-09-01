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
      const {
        data: { workouts },
      } = await client.get("/workout");

      data.workouts = workouts;

      setExerciseData(data);
    })();
  }, []);

  const createWorkout = async (data) => {
    try {
      await client.post("/workout", data);
    } catch (e) {
      console.error(e);
    }

    const {
      data: { workouts },
    } = await client.get("/workout");

    setExerciseData({ ...exerciseData, workouts });
  };

  return (
    <ExercisesContext.Provider value={{ ...exerciseData, createWorkout }}>
      {children}
    </ExercisesContext.Provider>
  );
};
