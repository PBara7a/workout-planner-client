import "../../styles/WorkoutCard.css";

const WorkoutCard = ({ workout, index, open }) => {
  const cardNumber = String(index + 1).padStart(2, "0");

  return (
    <div className="workout-card">
      <div className="box">
        <div className="content">
          <h2>{cardNumber}</h2>
          <h3>{workout.name.toUpperCase()}</h3>
          <button onClick={() => open(workout)}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
