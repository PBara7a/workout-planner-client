import { useState, useEffect } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutCardExpanded from "./WorkoutExpanded";

const MyWorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [openWorkout, setOpenWorkout] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:4040/workout");
      const data = await response.json();

      setWorkouts(data.workouts);
    })();
  }, []);

  return (
    <section className="my-workouts-page">
      <h1>My Workouts</h1>

      <div className="workouts-container">
        {openWorkout ? (
          <WorkoutCardExpanded
            workout={openWorkout}
            setOpenWorkout={setOpenWorkout}
          />
        ) : (
          workouts.map((workout, i) => (
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
