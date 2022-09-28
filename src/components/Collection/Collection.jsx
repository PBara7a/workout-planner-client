import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../App";
import client from "../../utils/client";
import WorkoutCard from "../Workouts/WorkoutCard";
import WorkoutCardExpanded from "../Workouts/WorkoutExpanded";
import { Container } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

const Collection = () => {
  const [openWorkout, setOpenWorkout] = useState(null);
  const [collection, setCollection] = useState([]);
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isCollectionEmpty, setIsCollectionEmpty] = useState(false);
  const { user, isLoggedIn } = useUser();
  const { theme } = useTheme();

  let navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("../auth-required", { replace: true });
    } else {
      (async () => {
        const {
          data: { data },
        } = await client.get(`/user/${user.id}/workouts`);
        setCollection(data);
        setIsCollectionEmpty(data.length === 0);
      })();
    }

    setIsLoading(false);
  }, [user?.id, isLoggedIn, navigate, value]);

  const deleteWorkout = async (id) => {
    try {
      await client.delete(`/workout/${id}`);
      setValue(() => value + 1);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container id="collection-page">
      {isLoading && (
        <LinearProgress color={theme === "light" ? "primary" : "secondary"} />
      )}

      {isLoggedIn && !isCollectionEmpty && (
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
                    deleteWorkout={deleteWorkout}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      )}

      {!isLoading && isCollectionEmpty && (
        <Grid container flexDirection="column" alignItems="center">
          <Grid item>
            <Typography
              variant="h1"
              sx={{ fontSize: "3rem", marginBottom: "4rem" }}
              style={theme === "light" ? { color: "#222" } : { color: "#ddd" }}
            >
              Oh! Still empty!
            </Typography>
          </Grid>
          <Grid item>
            <img src="sad.png" alt="sad face" />
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Collection;
