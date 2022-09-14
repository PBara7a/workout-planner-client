import { useTheme } from "./App";
import "../styles/ToggleButton.css";

const ToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="toggle-wrapper">
      <span className="text">Toggle Theme</span>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
