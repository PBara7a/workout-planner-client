import "../styles/ExerciseCard.css";

const ExerciseCard = ({ exercise }) => {
  return (
    <div class="card">
      <img
        src={`gifs/${exercise.demo}.gif`}
        alt="Exercise demo"
        class="card__image"
      />

      <div class="card__overlay">
        <div class="card__header">
          <svg class="card__arc">
            <path />
          </svg>
          <div class="card__header-text">
            <h3 class="card__title">{exercise.name.toUpperCase()}</h3>
          </div>
        </div>

        <p class="card__description">
          Equipment:
          <br />
          Target:
        </p>
      </div>
    </div>
  );
};

export default ExerciseCard;
