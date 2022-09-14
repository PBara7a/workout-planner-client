import React, { useState, useEffect, useContext } from "react";
import client from "../../utils/client";

const ExercisesContext = React.createContext();

export const useExercises = () => useContext(ExercisesContext);

export const ExercisesContextProvider = ({ children }) => {
  const [exerciseData, setExerciseData] = useState({
    exercises: [],
    workouts: [],
    bodyparts: [],
    targets: [],
    equipments: [],
  });

  useEffect(() => {
    (async () => {
      const {
        data: {
          data: { exercises },
        },
      } = await client.get("/exercise");

      const {
        data: {
          data: { bodyparts },
        },
      } = await client.get("/body/parts");

      const {
        data: {
          data: { targets },
        },
      } = await client.get("/body/targets");

      const {
        data: {
          data: { equipments },
        },
      } = await client.get("/equipment");

      const {
        data: { workouts },
      } = await client.get("/workout/1");

      setExerciseData({ exercises, workouts, bodyparts, targets, equipments });
    })();
  }, []);

  return (
    <ExercisesContext.Provider value={{ ...exerciseData }}>
      {children}
    </ExercisesContext.Provider>
  );
};
