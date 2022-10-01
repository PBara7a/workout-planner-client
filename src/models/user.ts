import Workout from "./workout";

type User = {
  id: number;
  username: string;
  password: string;
  workouts: Workout[];
};

export default User;
