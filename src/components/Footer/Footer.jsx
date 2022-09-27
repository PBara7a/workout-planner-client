import { Typography, Link } from "@mui/material";
import { useTheme } from "../App";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer>
      <Typography
        variant="body2"
        color={theme === "light" ? "text.secondary" : "common.white"}
        align="center"
        sx={{ position: "f" }}
      >
        {"Copyright © "}
        <Link
          color="inherit"
          href="https://pbara7a.github.io/portfolio/"
          target="_blank"
          sx={{ textDecoration: "none" }}
        >
          Paulo Barata
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </footer>
  );
};

export default Footer;
