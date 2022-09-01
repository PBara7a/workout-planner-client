import { useState } from "react";
import "../../styles/WorkoutCard.css";
import client from "../../utils/client";
import urls from "../../utils/demoUrls.json";

const WorkoutCardExpanded = ({ workout, setOpenWorkout }) => {
  const [email, setEmail] = useState("");
  const cardNumber = String(workout?.id).padStart(2, "0");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { email, workout: workout.id };

    try {
      client.post("/email", data);
    } catch (e) {
      console.error(e);
    }

    setEmail("");
  };

  return (
    <div className="workout-card-expanded">
      <div className="box">
        <div className="content">
          <h2>{cardNumber}</h2>
          <h3>{workout?.name.toUpperCase()}</h3>
          <div className="exercise-demos">
            {workout.exercises.map((exercise) => (
              <img
                key={exercise.id}
                src={urls[exercise.demo]}
                alt="exercise demo"
              />
            ))}
          </div>
          <p>{workout?.notes}</p>
          <form className="send-email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="your-email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <button onClick={() => setOpenWorkout(null)}>Back</button>
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCardExpanded;