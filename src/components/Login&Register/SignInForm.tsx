import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../App";
import { useUser } from "../contexts/UserContext";
import client from "../../utils/client";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Grid,
  Typography,
  Avatar,
  Button,
  TextField,
  Paper,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordRegex: RegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

interface SignInFormData {
  username: string;
  password: string;
}

const SignInForm = (): JSX.Element => {
  const [data, setData] = useState<SignInFormData>({
    username: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isLoginForm, setIsLoginForm] = useState<boolean>(true);
  const { setUser } = useUser();
  const { theme } = useTheme();

  const user = {
    username: data.username,
    password: data.password,
  };

  const passwordsMatch = data.password === confirmPassword;

  let navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    if (isLoginForm) {
      login();
    } else if (passwordRegex.test(data.password) && passwordsMatch) {
      await registerUser();
      login();
    }
  };

  const registerUser = async (): Promise<void> => {
    try {
      await client.post("/user", user);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async (): Promise<void> => {
    try {
      const {
        data: { data },
      } = await client.post("/login", user);

      localStorage.setItem(process.env.REACT_APP_USER_TOKEN!, data.token);
      localStorage.setItem(process.env.REACT_APP_USER_ID!, data.user.id);

      setUser(data.user);
      navigate("../create-workout", { replace: true });
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh" }}
      justifyContent="center"
    >
      <Grid
        item
        md={false}
        lg={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        lg={5}
        component={Paper}
        elevation={6}
        square
        sx={theme === "dark" ? { background: "#ccc" } : {}}
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            pt: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={
              theme === "light"
                ? { m: 1, bgcolor: "primary.main" }
                : { m: 1, bgcolor: "secondary.main" }
            }
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            {isLoginForm ? "Sign in" : "Sign up"}
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            <TextField
              color={theme === "light" ? "primary" : "secondary"}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={data.username}
              onChange={handleChange}
            />
            <TextField
              color={theme === "light" ? "primary" : "secondary"}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={data.password}
              onChange={handleChange}
            />

            {!isLoginForm && (
              <TextField
                color={
                  !passwordsMatch
                    ? "error"
                    : theme === "light"
                    ? "primary"
                    : "secondary"
                }
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={confirmPassword}
                onChange={handleChange}
              />
            )}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={theme === "light" ? "primary" : "secondary"}
              sx={{ mt: 3, mb: 2 }}
            >
              {isLoginForm ? "Sign in" : "Sign up"}
            </Button>

            <Typography>
              {!isLoginForm
                ? "Already have an account?"
                : "Don't have an account?"}
              <Button
                variant="text"
                onClick={() => setIsLoginForm(!isLoginForm)}
              >
                {!isLoginForm ? "Sign in" : "Sign up"}
              </Button>
            </Typography>

            {!isLoginForm && (
              <List>
                <ListItem>
                  <ListItemIcon>
                    {/(?=.*?[A-Z])/.test(data.password) ? "✅" : "❌"}
                  </ListItemIcon>
                  <ListItemText primary="Include at least one uppercase letter" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    {/(?=.*?[a-z])/.test(data.password) ? "✅" : "❌"}
                  </ListItemIcon>
                  <ListItemText primary="Include at least one lowercase letter" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    {/(?=.*?[0-9])/.test(data.password) ? "✅" : "❌"}
                  </ListItemIcon>
                  <ListItemText primary="Include at least one number" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    {/(?=.*?[{(})#?!@£$%^&*-])/.test(data.password)
                      ? "✅"
                      : "❌"}
                  </ListItemIcon>
                  <ListItemText primary="Include at least one special character" />
                </ListItem>

                <ListItem>
                  <ListItemIcon>
                    {/.{8,}/.test(data.password) ? "✅" : "❌"}
                  </ListItemIcon>
                  <ListItemText primary="Be at least 8 characters long" />
                </ListItem>
              </List>
            )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignInForm;
