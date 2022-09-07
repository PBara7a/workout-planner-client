import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutCard from "../WorkoutsPage/WorkoutCard";
import WorkoutCardExpanded from "../WorkoutsPage/WorkoutExpanded";
import { useUser } from "../contexts/UserContext";

const MyCollectionPage = () => {
  const [openWorkout, setOpenWorkout] = useState(null);
  const { isLoggedIn, collection } = useUser();
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("../auth-required", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      {isLoggedIn && (
        <section className="workouts-page">
          <h1>My Collection</h1>

          <div className="workouts-container">
            {openWorkout ? (
              <WorkoutCardExpanded
                workout={openWorkout}
                setOpenWorkout={setOpenWorkout}
              />
            ) : (
              collection?.map((workout, i) => (
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
      )}
    </>
  );
};

export default MyCollectionPage;
