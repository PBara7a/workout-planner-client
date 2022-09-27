import { Container } from "@mui/system";
import { Typography } from "@mui/material";

const styles = {
  height: "95vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const PleaseLogInPage = ({ theme }) => {
  return (
    <Container sx={{ ...styles, color: theme === "light" ? "#222" : "#ddd" }}>
      <Typography variant="h2">Authentication Required</Typography>
      <Typography variant="p">
        Please log in first to create and access your workout collection.
      </Typography>
    </Container>
  );
};

export default PleaseLogInPage;
