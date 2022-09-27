import { useState } from "react";
import WorkoutCard from "./WorkoutCard";
import WorkoutCardExpanded from "./WorkoutExpanded";
import { useTheme } from "../App";
import { useExercises } from "../contexts/ExercisesContext";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

const MyWorkoutsPage = () => {
  const [openWorkout, setOpenWorkout] = useState(null);
  const { workouts } = useExercises();
  const { theme } = useTheme();

  return (
    <Container id="workout-page">
      <Grid container flexDirection="column" alignItems="center">
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontSize: "3rem", marginBottom: "2rem" }}
            style={theme === "light" ? { color: "#222" } : { color: "#ddd" }}
          >
            Workouts
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent="center"
          spacing={!openWorkout ? 3 : 0}
          sx={theme === "light" ? { color: "#222" } : { color: "#ddd" }}
        >
          {openWorkout ? (
            <WorkoutCardExpanded
              workout={openWorkout}
              setOpenWorkout={setOpenWorkout}
              theme={theme}
            />
          ) : (
            workouts?.map((workout) => (
              <Grid key={workout.id} item md={4} lg={3}>
                <WorkoutCard
                  workout={workout}
                  open={setOpenWorkout}
                  theme={theme}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyWorkoutsPage;
