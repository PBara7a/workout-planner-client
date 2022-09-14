import { createContext, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ExercisesContextProvider } from "./contexts/ExercisesContext";
import { UserContextProvider } from "./contexts/UserContext";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
import Home from "./Home";
import CreateWorkout from "./CreateWorkoutPage/CreateWorkout";
import Workouts from "./WorkoutsPage/Workouts";
import Collection from "./MyCollection/Collection";
import Header from "./Header";
import UserForm from "./Login&Register/UserForm";
import PleaseLogInPage from "./PleaseLogInPage";
import "../styles/App.css";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curTheme) => (curTheme === "light" ? "dark" : "light"));
  };

  return (
    <ExercisesContextProvider>
      <UserContextProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
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
        </ThemeContext.Provider>
      </UserContextProvider>
    </ExercisesContextProvider>
  );
}

export default App;
