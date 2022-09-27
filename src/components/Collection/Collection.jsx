import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../App";
import WorkoutCard from "../Workouts/WorkoutCard";
import WorkoutCardExpanded from "../Workouts/WorkoutExpanded";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const Collection = () => {
  const [openWorkout, setOpenWorkout] = useState(null);
  const { isLoggedIn, collection } = useUser();
  const { theme } = useTheme();

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("../auth-required", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const isCollectionEmpty = collection.length === 0;

  return (
    <Container id="collection-page">
      {/* {isCollectionEmpty && (
        <div className="collection-empty">
          <h2>Oh! Still empty!</h2>
          <div className="sad-face">
            <img src="sad.png" alt="sad face" />
          </div>
        </div>
      )} */}

      <Grid container flexDirection="column" alignItems="center">
        <Grid item>
          <Typography
            variant="h1"
            sx={{ fontSize: "3rem", marginBottom: "2rem" }}
            style={theme === "light" ? { color: "#222" } : { color: "#ddd" }}
          >
            Collection
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
            collection?.map((workout) => (
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

export default Collection;
