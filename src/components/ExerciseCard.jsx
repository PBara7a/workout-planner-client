import { useExercises } from "./contexts/ExercisesContext";
import "../styles/ExerciseCard.css";

const ExerciseCard = ({ exercise }) => {
  const { targets, equipments } = useExercises();

  const targetName = targets.find(
    (target) => target.id === exercise.targetId
  ).name;

  const equipmentName = equipments.find(
    (equipment) => equipment.id === exercise.equipmentId
  ).name;

  return (
    <div className="card">
      <img
        src={`gifs/${exercise.demo}.gif`}
        alt="Exercise demo"
        className="card__image"
      />

      <div className="card__overlay">
        <div className="card__header">
          <svg className="card__arc">
            <path />
          </svg>
          <div className="card__header-text">
            <h3 className="card__title">{exercise.name.toUpperCase()}</h3>
          </div>
        </div>

        <div className="card__description">
          <h4>Target:</h4>
          {targetName}
          <h4>Equipment:</h4>
          {equipmentName}
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
