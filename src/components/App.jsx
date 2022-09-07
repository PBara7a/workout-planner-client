import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Home from "./Home";
import CreateWorkout from "./CreateWorkoutPage/CreateWorkout";
import { ExercisesContextProvider } from "./contexts/ExercisesContext";
import { UserContextProvider } from "./contexts/UserContext";
import "../styles/App.css";
import Workouts from "./WorkoutsPage/Workouts";
import Collection from "./MyCollection/Collection";
import Header from "./Header";
import UserForm from "./Login&Register/UserForm";
import PleaseLogInPage from "./PleaseLogInPage";

function App() {
  return (
    <ExercisesContextProvider>
      <UserContextProvider>
        <div className="App">
          <div className="main-layout">
            <SideMenu />
            <main>
              <Header />
              <Routes>
                <Route path="/login" element={<UserForm />} />
                <Route path="/" element={<Home />} />
                <Route path="/workouts" element={<Workouts />} />
                <Route path="/my-collection" element={<Collection />} />
                <Route path="/create-workout" element={<CreateWorkout />} />
                <Route path="/auth-required" element={<PleaseLogInPage />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </UserContextProvider>
    </ExercisesContextProvider>
  );
}

export default App;
