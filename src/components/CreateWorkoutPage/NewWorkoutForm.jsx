import { useState } from "react";

const NewWorkoutForm = ({
  workout,
  resetWorkout,
  removeExercise,
  createWorkout,
}) => {
  const defaultData = { name: "", target: "", notes: "" };
  const [formData, setFormData] = useState(defaultData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(defaultData);
    resetWorkout();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { ...formData };
    data.exercises = workout.map((exercise) => exercise.id);

    createWorkout(data);

    handleReset(e);
  };

  return (
    <form className="workout-form" onSubmit={handleSubmit}>
      <h1>Create workout</h1>

      <div className="workout-form__inputs-container">
        <label htmlFor="name" className="workout-form__inp">
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
          <span className="workout-form__label">Workout name</span>
          <span className="workout-form__focus-bg"></span>
        </label>

        <label htmlFor="target" className="workout-form__inp">
          <input
            type="text"
            id="target"
            value={formData.target}
            onChange={handleChange}
          />
          <span className="workout-form__label">Workout target</span>
          <span className="workout-form__focus-bg"></span>
        </label>
      </div>

      <div className="workout-form__inputs-container">
        <div className="new-workout-exercises">
          {workout.length === 0 && (
            <p className="workout-form__intructions">
              Click an exercise card to add it
            </p>
          )}
          <ul>
            {workout.map((exercise, i) => (
              <li className="workout-form__exercise-li" key={exercise.id}>
                <span>{exercise.name}</span>
                <span
                  className="workout-form__exercise-li__undo"
                  onClick={() => removeExercise(i)}
                >
                  ↺
                </span>
              </li>
            ))}
          </ul>
        </div>

        <label htmlFor="notes" className="workout-form__inp">
          <textarea
            id="notes"
            rows="4"
            cols="50"
            value={formData.notes}
            onChange={handleChange}
          />
          <span className="workout-form__label">Notes</span>
          <span className="workout-form__focus-bg"></span>
        </label>
      </div>

      <button className="workout-form__btn" onClick={handleReset}>
        Reset
      </button>
      <button className="workout-form__btn" type="submit">
        Create
      </button>
    </form>
  );
};

export default NewWorkoutForm;
