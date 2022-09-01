import { useExercises } from "../contexts/ExercisesContext";
import urls from "../../utils/demoUrls.json";
import "../../styles/ExerciseCard.css";

const ExerciseCard = ({ exercise, handleClick, deletable }) => {
  const { targets, equipments } = useExercises();

  const targetName = targets.find(
    (target) => target.id === exercise.targetId
  ).name;

  const equipmentName = equipments.find(
    (equipment) => equipment.id === exercise.equipmentId
  ).name;

  return (
    <div className="card" onClick={() => handleClick(deletable, exercise)}>
      <div className="imgBox">
        <img
          src={urls[exercise.demo]}
          alt="Exercise demo"
          className="card__image"
        />
        <h3>{exercise.name.toUpperCase()}</h3>
      </div>
      <div className="content">
        <h4>Target:</h4>
        {targetName}
        <h4>Equipment:</h4>
        {equipmentName}
      </div>
    </div>
  );
};

export default ExerciseCard;
