import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./contexts/UserContext";
import { useTheme } from "./App";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

const pages = ["Home", "Workouts", "Collection", "Create Workout"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { isLoggedIn, setUser } = useUser();
  const { theme, toggleTheme } = useTheme();

  let navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem(process.env.REACT_APP_USER_TOKEN);
      localStorage.removeItem(process.env.REACT_APP_USER_ID);
      setUser(null);
      navigate("../", { replace: true });
    } else {
      navigate("../login", { replace: true });
    }
  };

  return (
    <AppBar
      position="static"
      color={theme === "light" ? "primary" : "secondary"}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FitnessCenterIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Link
                    to={
                      page === "Home"
                        ? "/"
                        : page
                            .split(" ")
                            .map((word) => word.toLowerCase())
                            .join("-")
                    }
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <FitnessCenterIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            WP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                name={page}
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  to={
                    page === "Home"
                      ? "/"
                      : page
                          .split(" ")
                          .map((word) => word.toLowerCase())
                          .join("-")
                  }
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }} onClick={toggleTheme}>
              {theme === "light" ? (
                <DarkModeOutlinedIcon
                  sx={{ color: "#fff", mr: 4 }}
                  alt="Toggle theme"
                />
              ) : (
                <DarkModeIcon
                  sx={{ color: "#fff", mr: 4 }}
                  alt="Toggle theme"
                />
              )}
            </IconButton>
            <IconButton onClick={handleLoginLogout}>
              {!isLoggedIn ? (
                <LoginIcon sx={{ color: "#fff" }} alt="Toggle theme" />
              ) : (
                <LogoutIcon sx={{ color: "#fff" }} alt="Toggle theme" />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
