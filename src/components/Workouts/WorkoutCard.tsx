import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";
import Workout from "../../models/workout";

type WorkoutCardProps = {
  workout: Workout;
  open: React.Dispatch<React.SetStateAction<Workout | null>>;
  theme: string;
  hideDelete: boolean;
  deleteWorkout: (id: number) => void;
};

const WorkoutCard = ({
  workout,
  open,
  theme,
  hideDelete,
  deleteWorkout,
}: WorkoutCardProps): JSX.Element => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        color: "inherit",
        background: "none",
        borderColor: "grey.500",
      }}
      variant="outlined"
      id="workout-card"
    >
      <CardActionArea onClick={() => open(workout)}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            {workout.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Button
          size="small"
          color={theme === "light" ? "primary" : "secondary"}
          onClick={() => open(workout)}
        >
          Open
        </Button>
        {!hideDelete && (
          <Button
            size="small"
            color="error"
            onClick={() => deleteWorkout(workout.id)}
          >
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default WorkoutCard;
