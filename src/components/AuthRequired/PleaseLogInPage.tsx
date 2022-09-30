import { useTheme } from "../App";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

const styles = {
  height: "95vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const PleaseLogInPage = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Container sx={{ ...styles, color: theme === "light" ? "#222" : "#ddd" }}>
      <Typography variant="h2">Authentication Required</Typography>
      <Typography variant="body1">
        Please log in first to create and access your workout collection.
      </Typography>
    </Container>
  );
};

export default PleaseLogInPage;
