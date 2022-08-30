import { useState } from "react";
import { useExercises } from "../contexts/ExercisesContext";
import ExerciseCard from "./ExerciseCard";
import "../../styles/CreateWorkout.css";
import PaginationControls from "./PaginationControls";
import FilterControls from "./FilterControls";
import NewWorkoutForm from "./NewWorkoutForm";

const CreateWorkout = () => {
  const { exercises, bodyparts, targets, equipments } = useExercises();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    bodypartFilter: null,
    targetFilter: null,
    equipmentFilter: null,
  });
  const [workout, setWorkout] = useState([]);

  // Pagination
  const numOfCardsPerPage = 4;
  const startIndex = (page - 1) * numOfCardsPerPage;
  const endIndex = page * numOfCardsPerPage;

  let filteredExercises = exercises;
  let targetOptions = targets;
  let equipmentOptions = equipments;

  if (filters.bodypartFilter) {
    filteredExercises = filteredExercises.filter(
      (exercise) => exercise.bodyPartId === filters.bodypartFilter
    );

    targetOptions = targets.filter(
      (target) => target.bodyPartId === filters.bodypartFilter
    );
  }

  if (filters.targetFilter) {
    filteredExercises = filteredExercises.filter(
      (exercise) => exercise.targetId === filters.targetFilter
    );

    equipmentOptions = equipments.filter((equipment) => {
      const foundEquipment = filteredExercises.find(
        (exercise) => exercise.equipmentId === equipment.id
      );

      return foundEquipment;
    });
  }

  if (filters.equipmentFilter) {
    filteredExercises = filteredExercises.filter(
      (exercise) => exercise.equipmentId === filters.equipmentFilter
    );
  }

  const exercisesToRender = filteredExercises.slice(startIndex, endIndex);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === "bodypartFilter") {
      targetOptions = targets;
      equipmentOptions = equipments;
    }

    setFilters({ ...filters, [name]: Number(value) });
  };

  const handleClick = (deletable, item) => {
    if (deletable) {
      setWorkout(workout.filter((exercise) => exercise !== item));
    } else {
      setWorkout([...workout, item]);
    }
  };

  const removeExercise = (index) => {
    const updatedWokout = [...workout];
    updatedWokout.splice(index, 1);
    setWorkout(updatedWokout);
  };

  const resetWorkout = () => setWorkout([]);

  return (
    <div className="create-workout-page">
      <NewWorkoutForm
        workout={workout}
        resetWorkout={resetWorkout}
        removeExercise={removeExercise}
      />

      <div className="exercises-container">
        {exercisesToRender.map((exercise, i) => (
          <ExerciseCard
            key={exercise.id}
            style={{ "--z-index": exercisesToRender.length - i }}
            exercise={exercise}
            handleClick={handleClick}
            index={i}
          />
        ))}
      </div>

      <div>
        <FilterControls
          handleFilterChange={handleFilterChange}
          bodyparts={bodyparts}
          targets={targetOptions}
          equipments={equipmentOptions}
        />

        <PaginationControls
          page={page}
          setPage={setPage}
          numOfExercises={filteredExercises.length}
          numOfCardsPerPage={numOfCardsPerPage}
        />
      </div>
    </div>
  );
};

export default CreateWorkout;
