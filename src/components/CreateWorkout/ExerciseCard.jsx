import { useExercises } from "../contexts/ExercisesContext";
import { useTheme } from "../App";
import urls from "../../utils/demoUrls.json";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";

const ExerciseCard = ({ exercise, handleClick, deletable }) => {
  const { targets, equipments } = useExercises();
  const { theme } = useTheme();

  const targetName = targets.find(
    (target) => target.id === exercise.targetId
  ).name;

  const equipmentName = equipments.find(
    (equipment) => equipment.id === exercise.equipmentId
  ).name;

  const isScrollNeeded = exercise.name.length > 15;

  return (
    <Card
      id="exercise-card"
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minWidth: 300,
        color: "inherit",
        background: "none",
        borderColor: "grey.500",
      }}
      onClick={() => handleClick(deletable, exercise)}
    >
      <CardActionArea>
        <CardHeader
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
          style={isScrollNeeded ? { marginBottom: "1.7rem" } : {}}
          avatar={
            <Avatar
              src={urls[exercise.demo]}
              alt="Exercise demo"
              variant="rounded"
              sx={{ height: "150px", width: "150px" }}
            />
          }
          subheader={
            <Typography
              variant="h3"
              sx={
                theme === "light"
                  ? { fontSize: "1.5rem", color: "primary.main" }
                  : { fontSize: "1.5rem", color: "secondary.main" }
              }
              className={isScrollNeeded ? "scroll-left" : ""}
            >
              {exercise.name.toUpperCase()}
            </Typography>
          }
        />
        <CardContent>
          <Typography sx={{ fontSize: "1.3rem" }} variant="h4">
            Target:
          </Typography>
          <Typography variant="p">{targetName}</Typography>

          <Typography sx={{ fontSize: "1.3rem" }} variant="h4">
            Equipment:
          </Typography>
          <Typography variant="p">{equipmentName}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExerciseCard;
