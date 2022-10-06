import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useTheme } from "../App";
import MenuIcon from "@mui/icons-material/Menu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Button,
  Tooltip,
} from "@mui/material";

const pages = ["Home", "Workouts", "Collection", "Create Workout"];

const Header = (): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = useState<Element | null>(null);
  const { isLoggedIn, setUser } = useUser();
  const { theme, toggleTheme } = useTheme();

  let navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      localStorage.removeItem(process.env.REACT_APP_USER_TOKEN || "");
      localStorage.removeItem(process.env.REACT_APP_USER_ID || "");
      setUser(undefined);
      navigate("../", { replace: true });
    } else {
      navigate("../login", { replace: true });
    }
  };

  return (
    <AppBar
      position="fixed"
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
                    onClick={handleCloseNavMenu}
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

          <Box sx={{ flexGrow: 0, color: "#fff" }}>
            <Tooltip title={theme === "light" ? "Dark Mode" : "Light Mode"}>
              <IconButton
                sx={{ mr: 4, color: "inherit" }}
                onClick={toggleTheme}
              >
                {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>

            <Tooltip title={isLoggedIn ? "Logout" : "Login"}>
              <IconButton sx={{ color: "inherit" }} onClick={handleLoginLogout}>
                {!isLoggedIn ? <LoginIcon /> : <LogoutIcon />}
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
