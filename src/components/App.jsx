import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Home from "./Home";
import CreateWorkout from "./CreateWorkoutPage/CreateWorkout";
import { ExercisesContextProvider } from "./contexts/ExercisesContext";
import "../styles/App.css";
import Workouts from "./WorkoutsPage/Workouts";

function App() {
  return (
    <ExercisesContextProvider>
      <div className="App">
        <div className="main-layout">
          <SideMenu />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/create-workout" element={<CreateWorkout />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </ExercisesContextProvider>
  );
}

export default App;
