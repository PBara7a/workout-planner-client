import { useState, useEffect, createContext, useContext } from "react";
import Bodypart from "../../models/bodypart";
import Equipment from "../../models/equipment";
import Exercise from "../../models/exercise";
import Target from "../../models/target";
import Workout from "../../models/workout";
import client from "../../utils/client";

interface ExercisesContextInterface {
  exercises: Exercise[];
  workouts: Workout[];
  bodyparts: Bodypart[];
  targets: Target[];
  equipments: Equipment[];
}

const ExercisesContext = createContext<ExercisesContextInterface>(
  {} as ExercisesContextInterface
);

export const useExercises = () => useContext(ExercisesContext);

export const ExercisesContextProvider = ({
  children,
}: {
  children: React.ReactNode[];
}) => {
  const [exerciseData, setExerciseData] = useState<ExercisesContextInterface>({
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
        data: {
          data: {
            user: { workouts },
          },
        },
      } = await client.get("/user/1");

      setExerciseData({ exercises, workouts, bodyparts, targets, equipments });
    })();
  }, []);

  return (
    <ExercisesContext.Provider value={{ ...exerciseData }}>
      {children}
    </ExercisesContext.Provider>
  );
};
