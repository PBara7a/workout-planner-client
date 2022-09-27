import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../App";
import { Button, FormGroup, Stack, TextField } from "@mui/material";

const NewWorkoutForm = ({ workout, resetWorkout, removeExercise }) => {
  const defaultData = { name: "", target: "", notes: "" };
  const [formData, setFormData] = useState(defaultData);
  const { user, isLoggedIn, createWorkout } = useUser();
  const { theme } = useTheme();
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(defaultData);
    resetWorkout();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      navigate("../auth-required", { replace: true });
    } else {
      const data = { ...formData, user_id: user.id };
      data.exercises = workout.map((exercise) => exercise.id);

      createWorkout(data);

      handleReset(e);
    }
  };

  return (
    <FormGroup onSubmit={handleSubmit}>
      <Stack direction="row" spacing={1}>
        <TextField
          className="custom-input"
          color={theme === "light" ? "primary" : "secondary"}
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          fullWidth
        />

        <TextField
          className="custom-input"
          color={theme === "light" ? "primary" : "secondary"}
          type="text"
          id="target"
          value={formData.target}
          onChange={handleChange}
          placeholder="Target"
          fullWidth
        />
      </Stack>

      <Stack direction="row" spacing={1} my={1}>
        <TextField
          className="custom-input"
          color={theme === "light" ? "primary" : "secondary"}
          rows={3}
          value={workout.map((exercise) => exercise.id).join(", ")}
          placeholder="Exercise ids (click exercise cards to add)"
          fullWidth
          multiline
        />

        <TextField
          className="custom-input"
          color={theme === "light" ? "primary" : "secondary"}
          id="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
          fullWidth
          multiline
        />
      </Stack>

      <Stack direction="row" justifyContent="center" spacing={1}>
        <Button
          variant="contained"
          color={theme === "light" ? "primary" : "secondary"}
          onClick={handleReset}
          sx={{ width: "100px" }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color={theme === "light" ? "primary" : "secondary"}
          type="submit"
          sx={{ width: "100px" }}
        >
          Create
        </Button>
      </Stack>
    </FormGroup>
  );
};

export default NewWorkoutForm;
