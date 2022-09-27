import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActionArea,
  CardActions,
} from "@mui/material";

const WorkoutCard = ({ workout, open, theme }) => {
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
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default WorkoutCard;
