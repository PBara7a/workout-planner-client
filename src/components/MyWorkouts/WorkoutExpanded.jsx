import { useState } from "react";
import "../../styles/WorkoutCard.css";

const WorkoutCardExpanded = ({ workout, setOpenWorkout }) => {
  const [email, setEmail] = useState("");
  const cardNumber = String(workout?.id).padStart(2, "0");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
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
                src={`gifs/${exercise.demo}.gif`}
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
