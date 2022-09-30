import Exercise from "./exercise";

type Workout = {
  id: number;
  name: string;
  target: string;
  notes: string;
  userId: number;
  exercises: Exercise[];
  createdAt: string;
  updatedAt: string;
};

export default Workout;
