import { createContext, useState, useContext } from "react";
import { ExercisesContextProvider } from "./contexts/ExercisesContext";
import { UserContextProvider } from "./contexts/UserContext";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import SignInForm from "./Login&Register/SignInForm";
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
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<SignInForm />} />
            </Routes>
          </div>
        </ThemeContext.Provider>
      </UserContextProvider>
    </ExercisesContextProvider>
  );
}

export default App;
