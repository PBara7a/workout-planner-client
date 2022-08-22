import { useState } from "react";
import { useExercises } from "./contexts/ExercisesContext";
import ExerciseCard from "./ExerciseCard";

const CreateWorkout = () => {
  const [page, setPage] = useState(1);
  const { exercises } = useExercises();

  const numOfCardsPerPage = 4;
  const startIndex = (page - 1) * numOfCardsPerPage;
  const endIndex = page * numOfCardsPerPage;

  const exercisesToRender = exercises.slice(startIndex, endIndex);

  return (
    <>
      <nav className="page-controls">
        <button onClick={(e) => setPage(1)}>&laquo;</button>
        <button onClick={(e) => setPage(page - 1)}>&lt;</button>
        <input
          type="number"
          min={1}
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <button onClick={(e) => setPage(page + 1)}>&gt;</button>
        <button
          onClick={(e) =>
            setPage(Math.ceil(exercises.length / numOfCardsPerPage))
          }
        >
          &raquo;
        </button>
      </nav>

      <ul className="exercises-list">
        {exercisesToRender.map((exercise) => (
          <li key={exercise.id}>
            <ExerciseCard exercise={exercise} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CreateWorkout;
