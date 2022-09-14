import ToggleButton from "./ToggleButton";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="spacer"></div>
      <div>Copyright © {year}</div>
      <ToggleButton />
    </footer>
  );
};

export default Footer;
