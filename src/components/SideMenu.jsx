import "../styles/SideMenu.css";

const SideMenu = () => {
  const menuItems = ["Home", "My Workouts", "Create Workout", "Calendar"];

  return (
    <ul className="side-menu">
      {menuItems.map((item, i) => (
        <li key={i} style={{ "--z-index": menuItems.length - i }}>
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
