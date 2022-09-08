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

  const isCollectionEmpty = collection.length === 0;

  return (
    <>
      {isCollectionEmpty && (
        <div className="collection-empty">
          <h2>Oh! Still empty!</h2>
          <div className="sad-face">
            <img src="sad.png" alt="sad face" />
          </div>
        </div>
      )}
      {isLoggedIn && !isCollectionEmpty && (
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
