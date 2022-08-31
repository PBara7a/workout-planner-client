import "../styles/SideMenu.css";

const SideMenu = () => {
  const menuItems = ["Home", "My Workouts", "Create Workout"];

  return (
    <nav className="side-menu__container">
      <ul className="side-menu">
        {menuItems.map((item, i) => (
          <li key={i} style={{ "--z-index": menuItems.length - i }}>
            <a
              href={
                i === 0
                  ? "/"
                  : item
                      .split(" ")
                      .map((word) => word.toLowerCase())
                      .join("-")
              }
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
