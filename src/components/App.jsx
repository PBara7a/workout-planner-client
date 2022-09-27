import { createContext, useState, useContext } from "react";
import { ExercisesContextProvider } from "./contexts/ExercisesContext";
import { UserContextProvider } from "./contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import SignInForm from "./Login&Register/SignInForm";
import Workouts from "./Workouts/Workouts";
import Collection from "./Collection/Collection";
import PleaseLogInPage from "./AuthRequired/PleaseLogInPage";
import CreateWorkout from "./CreateWorkoutPage/CreateWorkout";
import Footer from "./Footer/Footer";
import "../styles/App.css";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curTheme) => (curTheme === "light" ? "dark" : "light"));
  };

  return (
    <ExercisesContextProvider>
      <UserContextProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignInForm />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/create-workout" element={<CreateWorkout />} />
              <Route
                path="/auth-required"
                element={<PleaseLogInPage theme={theme} />}
              />
            </Routes>

            <Footer />
          </div>
        </ThemeContext.Provider>
      </UserContextProvider>
    </ExercisesContextProvider>
  );
}

export default App;
