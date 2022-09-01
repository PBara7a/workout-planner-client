import { useState, useEffect } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutCardExpanded from "./WorkoutExpanded";
import client from "../../utils/client";

const MyWorkoutsPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [openWorkout, setOpenWorkout] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await client.get("/workout");

      setWorkouts(data.workouts);
    })();
  }, []);

  return (
    <section className="my-workouts-page">
      <h1>Workouts</h1>

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
