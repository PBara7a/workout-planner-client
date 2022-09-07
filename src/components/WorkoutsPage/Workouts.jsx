import { useState } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutCardExpanded from "./WorkoutExpanded";
import { useExercises } from "../contexts/ExercisesContext";

const MyWorkoutsPage = () => {
  const [openWorkout, setOpenWorkout] = useState(null);
  const { workouts } = useExercises();

  return (
    <section className="workouts-page">
      <h1>Workouts</h1>

      <div className="workouts-container">
        {openWorkout ? (
          <WorkoutCardExpanded
            workout={openWorkout}
            setOpenWorkout={setOpenWorkout}
          />
        ) : (
          workouts?.map((workout, i) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              index={i}
              open={setOpenWorkout}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default MyWorkoutsPage;
