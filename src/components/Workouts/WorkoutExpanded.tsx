import React, { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import client from "../../utils/client";
import getUrl from "../../utils/getUrl";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormGroup,
  ImageList,
  ImageListItem,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import Workout from "../../models/workout";

type WorkoutCardExpandedProps = {
  workout: Workout;
  setOpenWorkout: React.Dispatch<React.SetStateAction<Workout | null>>;
  theme: string;
};

const WorkoutCardExpanded = ({
  workout,
  setOpenWorkout,
  theme,
}: WorkoutCardExpandedProps): JSX.Element => {
  const [email, setEmail] = useState("");
  const { width } = useWindowDimensions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = { email, workout: workout.id };

    try {
      client.post("/email", data);
    } catch (e) {
      console.error(e);
    }

    setEmail("");
  };

  return (
    <Card
      sx={{ background: "none", color: "inherit", borderColor: "grey.500" }}
      variant="outlined"
    >
      <CardHeader
        title={
          <Typography variant="h5">{workout?.name.toUpperCase()}</Typography>
        }
      />

      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ImageList cols={width < 700 ? 2 : 3}>
          {workout.exercises.map((exercise) => (
            <ImageListItem key={exercise.id}>
              <img
                src={getUrl(exercise.demo)}
                alt="exercise demo"
                style={{
                  height: "200px",
                  borderRadius: "10px",
                  border: "1px solid grey",
                }}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography>Intructions: {workout?.notes}</Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <FormGroup>
          <TextField
            className="custom-input"
            color={theme === "light" ? "primary" : "secondary"}
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoFocus
          />
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "0.6rem",
            }}
          >
            <Button
              variant="contained"
              color={theme === "light" ? "primary" : "secondary"}
              onClick={() => setOpenWorkout(null)}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color={theme === "light" ? "primary" : "secondary"}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Stack>
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default WorkoutCardExpanded;
