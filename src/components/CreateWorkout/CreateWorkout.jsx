import { useState } from "react";
import { useExercises } from "../contexts/ExercisesContext";
import { useTheme } from "../App";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import ExerciseCard from "./ExerciseCard";
import PaginationControls from "./PaginationControls";
import FilterControls from "./FilterControls";
import NewWorkoutForm from "./NewWorkoutForm";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const defaultFilters = {
  bodypartFilter: 0,
  targetFilter: 0,
  equipmentFilter: 0,
  name: "",
};

const CreateWorkout = () => {
  const { exercises, bodyparts, targets, equipments } = useExercises();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState(defaultFilters);
  const [workout, setWorkout] = useState([]);
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const handlePageChange = (action) => {
    const lastPage = Math.ceil(filteredExercises.length / numOfCardsPerPage);
    switch (action) {
      case "next":
        if (page < lastPage) setPage(page + 1);
        break;
      case "previous":
        if (page > 1) setPage(page - 1);
        break;
      case "last":
        setPage(lastPage);
        break;
      case "first":
        setPage(1);
        break;
      default:
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;

    if (name === "bodypartFilter") {
      targetOptions = targets;
      equipmentOptions = equipments;

      setFilters({ ...defaultFilters, [name]: Number(value) });
    } else if (name === "targetFilter") {
      equipmentOptions = equipments;

      setFilters({
        ...defaultFilters,
        bodypartFilter: filters.bodypartFilter,
        [name]: Number(value),
      });
    } else if (name === "equipmentFilter") {
      setFilters({ ...filters, [name]: Number(value) });
    } else if (name === "name") {
      setFilters({ ...filters, [name]: value });
    }

    setPage(1);
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

  // Pagination
  const numOfCardsPerPage = width < 800 ? 2 : 3;
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

  if (filters.name) {
    filteredExercises = filteredExercises.filter((exercise) =>
      exercise.name.includes(filters.name.toLowerCase())
    );
  }

  const exercisesToRender = filteredExercises.slice(startIndex, endIndex);

  return (
    <Container id="create-workout-page">
      <Grid
        container
        flexDirection="column"
        sx={theme === "light" ? { color: "#222" } : { color: "#ddd" }}
      >
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}
          >
            Create Workout
          </Typography>
        </Grid>

        <Grid item>
          <NewWorkoutForm
            workout={workout}
            resetWorkout={resetWorkout}
            removeExercise={removeExercise}
          />
        </Grid>

        <Grid item container justifyContent="center" my={2} spacing={3}>
          {exercisesToRender.map((exercise, i) => (
            <Grid item key={exercise.id}>
              <ExerciseCard
                style={{ "--z-index": exercisesToRender.length - i }}
                exercise={exercise}
                handleClick={handleClick}
                index={i}
              />
            </Grid>
          ))}
        </Grid>

        <Grid item>
          <FilterControls
            filters={filters}
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
            handlePageChange={handlePageChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateWorkout;
