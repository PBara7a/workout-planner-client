import { Link } from "react-router-dom";
import "../styles/SideMenu.css";

const SideMenu = () => {
  const menuItems = ["Home", "Workouts", "My Collection", "Create Workout"];

  return (
    <nav className="side-menu__container">
      <ul className="side-menu">
        {menuItems.map((item, i) => (
          <li key={i} style={{ "--z-index": menuItems.length - i }}>
            <Link
              to={
                i === 0
                  ? "/"
                  : item
                      .split(" ")
                      .map((word) => word.toLowerCase())
                      .join("-")
              }
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
