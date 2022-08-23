import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SideMenu from "./components/SideMenu";
import Home from "./components/Home";
import CreateWorkout from "./components/CreateWorkoutPage/CreateWorkout";
import { ExercisesContextProvider } from "./components/contexts/ExercisesContext";
import "./App.css";

function App() {
  return (
    <ExercisesContextProvider>
      <div className="App">
        <div className="main-layout">
          <SideMenu />
          <main>
            <Routes>
              <Route path="/home" element={<Home />} />
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
